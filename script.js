const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a glorious text-content!';

container.appendChild(content);

const redText = document.createElement('p');
redText.classList.add('red');
redText.textContent = "Hey I'm red!"
redText.style.color = 'red';

container.appendChild(redText);

const blueHeading = document.createElement('h3');
blueHeading.classList.add('blue');
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = 'blue';

container.appendChild(blueHeading);

const pink = document.createElement('div');
pink.classList.add('pink');
pink.style.backgroundColor = 'pink'

const pinkHeading = document.createElement('h1');
pinkHeading.classList.add('heading');
pinkHeading.textContent = "I'm in a div"
pink.appendChild(pinkHeading);

const meToo = document.createElement('p');
meToo.classList.add('textPink');
meToo.textContent = "ME TOO!";
pink.appendChild(meToo);

container.appendChild(pink);
