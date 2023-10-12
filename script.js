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



