document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        {
            quote: "Today is your opportunity to build the tomorrow you want.",
            author: "Ken Poirot"
        },
        {
            quote: "When you have a dream, you've got to grab it and never let go.",
            author: "Carol Burnett"
        },
        {
            quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            quote: "You define your own life. Don't let other people write your script.",
            author: "Oprah Winfrey"
        },
        {
            quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
            author: "Justin Bieber"
        },
        {
            quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
            author: "Ralph Waldo Emerson"
        },
        {
            quote: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle"
        },
        {
            quote: "Wake up determined, go to bed satisfied.",
            author: "The Rock"
        },
        {
            quote: "It ain't about how hard you hit. It’s about how hard you can get hit and keep moving forward.",
            author: "Rocky Balboa"
        },
    ];
    
    // Random Background Image
    const randomBackgroundImages = ["images/beach.jpg", "images/mountains.jpg", "images/nature.jpg", "images/purple_sky.jpg", "images/rocks.jpg", "images/water.jpg"];
    const randomImgIndex = Math.floor(Math.random() * randomBackgroundImages.length)
    const quoteContainer = document.querySelector('.quote-container')
    quoteContainer.style.backgroundImage = `url('${randomBackgroundImages[randomImgIndex]}')`;
    
    // Random Quote
    const quoteEl = document.querySelector('.quote');
    const authorEl = document.querySelector('.author');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteEl.textContent = `"${randomQuote.quote}"`;
    authorEl.textContent = `- ${randomQuote.author}`;
    
    // Clickable Quote Box
    document.querySelector('.quote-box').addEventListener('click', function(){
        window.open('https://scrimba.com/learn/frontend', '_blank');
    })
});