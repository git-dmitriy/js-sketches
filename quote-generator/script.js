document.addEventListener('DOMContentLoaded', () => {
  const quoteContainer = document.querySelector('#quote-container');
  const quoteText = document.querySelector('#quote');
  const authorText = document.querySelector('#author');
  const twitterBtn = document.querySelector('#twitter');
  const newQuoteBtn = document.querySelector('#new-quote');
  const loader = document.querySelector('.lds-ellipsis');

  let quotes = [];

  const showLoader = () => {
    loader.style.display = 'block';
    quoteContainer.style.display = 'none';
  };

  const hideLoader = () => {
    loader.style.display = 'none';
    quoteContainer.style.display = 'block';
  };

  const fetchQuotes = async () => {
    showLoader();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      quotes = await response.json();
      const quote = getRandomQuote();
      showQuote(quote);
    } catch (err) {
      console.log(err);
      showLoader();
    }
    hideLoader();
  };

  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const showQuote = (quoteObj) => {
    showLoader();
    if (quoteObj.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quoteObj.text;
    authorText.textContent = quoteObj.author
      ? quoteObj.author
      : 'authorship not established';
    hideLoader();
  };

  const getNewQuote = () => {
    showQuote(getRandomQuote());
  };

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweetUrl, '_blank');
  };

  fetchQuotes();
  twitterBtn.addEventListener('click', tweetQuote);
  newQuoteBtn.addEventListener('click', getNewQuote);
});
