document.addEventListener('DOMContentLoaded', () => {
  const videoElement = document.querySelector('#video');
  const button = document.querySelector('#button');

  selectMediaStream(videoElement);

  button.addEventListener('click', async () => {
    try {
      await videoElement.requestPictureInPicture();
    } catch (err) {
      console.info(err);
    }
  });
});

async function selectMediaStream(videoElement) {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;

    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log(err);
  }
}
