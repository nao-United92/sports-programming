// Get an element by its ID
const mainTitle = document.getElementById('main-title');

// Change its text content
mainTitle.textContent = 'Title Changed by DOM Interface';

// Create a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph added dynamically.';

// Get the container element
const container = document.getElementById('container');

// Append the new element to the container
container.appendChild(newParagraph);

// Add a class to the new paragraph
newParagraph.className = 'new-content';
