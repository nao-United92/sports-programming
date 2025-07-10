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

// --- Additional Selector API Methods ---

// 1. Using more complex selectors
// Select a <p> element that is a direct child of the div with id 'content-area'
const directChildParagraph = document.querySelector('#content-area > p');
if (directChildParagraph) {
    directChildParagraph.style.fontWeight = 'bold';
}

// Select all paragraphs with the 'intro' class that also have the 'highlight' class
const highlightedIntros = document.querySelectorAll('p.intro.highlight');
highlightedIntros.forEach(p => {
    p.style.fontStyle = 'italic';
});

// 2. Using the .closest() method
// Find the closest ancestor of the first '.intro' paragraph that is a 'div'
const firstIntro = document.querySelector('.intro');
if (firstIntro) {
    const parentDiv = firstIntro.closest('div');
    if (parentDiv) {
        // Add a border to the closest div ancestor
        parentDiv.style.border = '2px solid red';
    }
}

// 3. Using the .matches() method
// Check if the title element has the class 'title'
if (titleElement && titleElement.matches('.title')) {
    console.log('The title element matches the ".title" selector.');
    // Add another class to it
    titleElement.classList.add('main-heading');
}

// Loop through all paragraphs and check which ones are '.intro' paragraphs
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => {
    if (p.matches('.intro')) {
        console.log('Found a paragraph that matches ".intro":', p.textContent);
    }
});