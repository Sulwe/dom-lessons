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

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const bttn = document.querySelector('#bttn');
bttn.addEventListener('click', () => {alert("Hello World");
});
function alertFunction(){
    alert("Yay! You did it!");
}
btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e){
    console.log(e);
});

btn.addEventListener('click', function(e) {
    console.log(e.target);
});

btn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});



const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

function addItemToList() {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();

}

button.addEventListener('click', addItemToList);

