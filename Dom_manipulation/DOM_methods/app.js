// Create elements
// add text
// add styles 
const content = document.querySelector('#container');
const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';

const blueH3 = document.createElement('h3');
blueH3.textContent = 'Im a Blue h3'
blueH3.style.color = 'blue';

content.appendChild(redP);
content.appendChild(blueH3);

// add div to container
// add p and h1 inside div
const insideDiv = document.createElement('div');
insideDiv.style.cssText = 'background-color:pink;';
insideDiv.style.borderWidth = 'thick';



const indiseH1 = document.createElement('h1');
indiseH1.textContent = "I'm a Div";
insideDiv.appendChild(indiseH1)

const insideP = document.createElement('p');
insideP.textContent = 'ME TOO'
insideDiv.appendChild(insideP);


content.appendChild(insideDiv);

