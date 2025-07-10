// Select the first element with the class 'title'
const titleElement = document.querySelector('.title');

// Change its text content
titleElement.textContent = 'Title Changed by Selector API';

// Select all elements with the class 'intro'
const introParagraphs = document.querySelectorAll('.intro');

// Loop through the NodeList and add a new class
introParagraphs.forEach(paragraph => {
  paragraph.classList.add('highlight');
});

// Select an element by its ID
const contentArea = document.querySelector('#content-area');

// Create a new paragraph
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This paragraph was added using querySelector.';

// Append the new paragraph to the content area
contentArea.appendChild(newParagraph);
