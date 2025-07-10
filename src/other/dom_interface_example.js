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

// --- Additional DOM Manipulation Methods ---

// 1. Remove an element
// Let's remove the first paragraph inside the container
const firstParagraph = container.getElementsByTagName('p')[0];
if (firstParagraph) {
  container.removeChild(firstParagraph);
}

// 2. Set an attribute
// Add a 'data-status' attribute to the main title
mainTitle.setAttribute('data-status', 'updated');

// 3. Replace a child element
// Create another paragraph to replace the one we added
const replacementParagraph = document.createElement('p');
replacementParagraph.textContent = 'This paragraph is a replacement.';
replacementParagraph.id = 'replacement-p';

// Replace newParagraph with replacementParagraph
if (container.contains(newParagraph)) {
    container.replaceChild(replacementParagraph, newParagraph);
}

// 4. Get elements by class name
// Create a few more elements with the same class to demonstrate
for (let i = 0; i < 3; i++) {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.textContent = `Item ${i + 1}`;
    container.appendChild(item);
}

// Now, get all elements with the 'list-item' class
const listItems = document.getElementsByClassName('list-item');

// Change the style of the first element found by class name
if (listItems.length > 0) {
    listItems[0].style.color = 'blue';
}

// 5. Get elements by tag name
// Get all 'p' elements within the container
const allParagraphsInContainer = container.getElementsByTagName('p');

// Add a border to all paragraphs in the container
for (let p of allParagraphsInContainer) {
    p.style.border = '1px solid green';
}