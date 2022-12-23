const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote:
      "Happiness is the consequence of personal effort. You fight for it, strive for it, insist upon it, and sometimes even travel around the world looking for it.",
    author: "Elizabeth Gilbert",
  },
];
function generateQuote() {
  // choose a random index
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // get the quote and author at the random index
  const quote = quotes[randomIndex].quote;
  const author = quotes[randomIndex].author;

  // update the quote text and author element with the new quote and author
  quoteText.textContent = quote;
  quoteAuthor.textContent = author;
}

// generate a quote when the page loads
generateQuote();

// attach the generateQuote function to the new quote button
const newQuoteButton = document.getElementById("new-quote-button");
newQuoteButton.addEventListener("click", generateQuote);
