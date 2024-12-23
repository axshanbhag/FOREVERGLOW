document.getElementById('circle-image').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

const circleImage = document.getElementById('circle-image');
const popup = document.getElementById('popup');

const colors = ['#b4c0fa', '#fac3d6', '#cfc3fa', '#c3e0fa', '#faf6d9', '#fae3d9', '#ddfad9'];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

circleImage.addEventListener('click', function() {
  const randomColor = getRandomColor();

  popup.style.backgroundColor = randomColor;

  popup.style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
  popup.style.display = 'none';
});

const quotes = [
  "It takes time so be patient",
  "Knowing others is intelligence; knowing yourself is true wisdom.",
  "When you allow your light to shine, your glow up becomes an inspiring beacon for others.",
  "Transforming into a confident version of myself.",
  "Glowing up, one day at a time.",
  "Makeup is not a mask that covers up your beauty; it's a weapon that helps you express who you are from the inside.",
  "Beauty comes from inside",
];

// Function to get a random quote
function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

// Function to update the popup with a random quote
function updateQuote() {
    const popup = document.getElementById('popup');
    const randomColor = getRandomColor();
    const randomQuote = getRandomQuote();

    popup.style.backgroundColor = randomColor;
    popup.querySelector('p').textContent = randomQuote;

    popup.style.display = 'block';
}

// Event listener for the circular image click
document.getElementById('circle-image').addEventListener('click', function() {
    updateQuote();
});