document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  const toggleIcon = document.querySelector('#toggle-icon');
  const images = document.querySelectorAll('img');

  const setModeToImages = (images) => {
    images.forEach((img) => {
      if (img.src.includes('_dark')) {
        img.src = img.src.replace('_dark', '');
      } else {
        img.src = img.src.slice(0, -4).concat('_dark', img.src.slice(-4));
      }
    });
  };

  const setModeToToggler = (isDark) => {
    isDark
      ? (toggleIcon.children[0].innerText = 'Тёмный режим')
      : (toggleIcon.children[0].innerText = 'Светлый режим');

    toggleIcon.children[1].classList.toggle('fa-sun');
    toggleIcon.children[1].classList.toggle('fa-moon');
  };

  const switchTheme = (event) => {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      setModeToToggler(event.target.checked);
      setModeToImages(images);
    } else {
      setModeToToggler(event.target.checked);
      setModeToImages(images);
      document.documentElement.setAttribute('data-theme', '');
    }
  };

  toggleSwitch.addEventListener('change', switchTheme);
});
