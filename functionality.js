//Create a button on the webpage.
function createButton () {
    const btn = document.createElement('button');
    btn.innerHTML = 'My First Button';
    btn.id = 'first_button';
    btn.addEventListener('click',()=>{
        alert('The button has been clicked! Stay Calm!!');
    });
    document.body.appendChild(btn);
};

function validate (element) {
  addSubButtonAccessCheck(element.value)
  const submitButton = document.getElementById('age-submit');
  if (element.value === '') {
    submitButton.setAttribute('disabled',true);
  }
  else if (element.value < 1 || element.value > 100) {
    submitButton.setAttribute('disabled',true);
    alert('Value is out of bounds. Input valid guess.');
    element.value = ''
  }
  else {
    submitButton.removeAttribute('disabled');
  }
}

function createAgeSection () {
  const ageSection = document.getElementById('age-input-section');
  const ageLabel = document.createElement('label');
  ageLabel.setAttribute('for','age-input');
  ageLabel.innerHTML = 'Enter your age:'

  const inputEle = document.createElement('input');
  inputEle.setAttribute('id','age-input');
  inputEle.setAttribute('type','number');
  inputEle.setAttribute('min','1');
  inputEle.setAttribute('max','100');
  inputEle.setAttribute('id','age-input');

  //div for add and subtract buttons
  const inputControls = document.createElement('div');
  inputControls.setAttribute('class','number-controls');

  const addButton = document.createElement('button');
  addButton.setAttribute('id','add');
  addButton.setAttribute('class','number-control');
  addButton.innerHTML = '+'

  const subtractButton = document.createElement('button');
  subtractButton.setAttribute('id','subtract');
  subtractButton.setAttribute('disabled','true');
  subtractButton.setAttribute('class','number-control');
  subtractButton.innerHTML = '-'
  ///////////////////
  const submitButton = document.createElement('button');
  submitButton.setAttribute('id','age-submit');
  submitButton.setAttribute('disabled','true');
  submitButton.innerHTML = 'Do Something'

  //Event Listeners
  function checkInput(event) {
    validate(event.target)
  }
  
  inputEle.addEventListener('focusout',checkInput)
  inputEle.addEventListener('poi',checkInput)
  //////////////

  
  
  function addOne (event) {
    inputEle.value++;
    validate(inputEle);
  }

  addButton.addEventListener('click',addOne);
  
  function subtractOne (event) {
    inputEle.value--;
    validate(inputEle);
  }
  subtractButton.addEventListener('click',subtractOne);

  inputControls.append(addButton,subtractButton);

  ageSection.append(ageLabel,inputEle,inputControls,document.createElement('br'),submitButton);

  function submitButtonClick(event) {
    alert(`You will be ${Number(inputEle.value) + 25} in 25 years. In case you were curious.`)
    inputEle.value = ''
    submitButton.setAttribute('disabled',true);
    subtractButton.setAttribute('disabled',true);
  }

  submitButton.addEventListener('click',submitButtonClick)
}

const addSubButtonAccessCheck = value => {
  const subtractButton = document.getElementById('subtract');
  const addButton = document.getElementById('add');
  //probably cound have been a switch/case structure.
if (value > 1 && value < 100) {
  subtractButton.removeAttribute('disabled');
  addButton.removeAttribute('disabled');
} else if (value === 100) {
  subtractButton.removeAttribute('disabled');
} else if (value >= 100) {
  addButton.setAttribute('disabled', true);
} else if (value <= 1) {
  subtractButton.setAttribute('disabled', true);
}
}

function createProgrammingLangSection () {
  const programmingLanguagesDiv = document.createElement('div');
  programmingLanguagesDiv.id = 'programming-language-div';

  const programmingTitle = document.createElement('h2');
  programmingTitle.id = 'programming-languages-title'
  programmingTitle.innerHTML = 'Programming Languages:'

  const listHolder = document.createElement('ul');
  listHolder.id = 'programming-languages';
  programmingTitle.after(listHolder)

  const htmlLi = document.createElement('li');
  htmlLi.id = 'html'
  htmlLi.innerHTML = 'HTML5'

  const cssLi = document.createElement('li');
  cssLi.id = 'css'
  cssLi.innerHTML = 'CSS'

  const pythonLi = document.createElement('li');
  pythonLi.id = 'python';
  pythonLi.innerHTML = 'Python3'

  const javaScriptLi = document.createElement('li');
  javaScriptLi.id = 'java-script'
  javaScriptLi.innerHTML = 'JavaScript'

  const bashLi = document.createElement('li');
  bashLi.id = 'bash'
  bashLi.innerHTML = 'Bash'

  const javaLi = document.createElement('li');
  javaLi.id = 'java'
  javaLi.innerHTML = 'Java'

  listHolder.append(bashLi,htmlLi,cssLi,pythonLi,javaScriptLi,javaLi);

  programmingLanguagesDiv.appendChild(programmingTitle);
  programmingLanguagesDiv.appendChild(listHolder);

  document.getElementById('name').after(programmingLanguagesDiv);
}

//returns a value from 1-value_given
function genRandomInt (floorVal,ceilVal) { 
  let randomInt;
  do {
    randomInt = Math.floor((Math.random() * ceilVal) + 1);
  } while (randomInt < floorVal);
  return randomInt
}

// function styleBall (ball) {
//   ballSize = `${genRandomInt(50,150)}px`;
//   ball.style.height = ballSize;
//   ball.style.width = ballSize;
//   ball.style.backgroundColor = `rgb(${genRandomInt(1,300)},${genRandomInt(1,300)},${genRandomInt(1,300)}`;
//   ball.style.borderRadius = '50%';
//   ball.style.display = 'inline-block';
// }
let ballCount = 0;

function createBall () {
  ball = document.createElement('div');
  ball.id = `ball`;
  ballCount++
  // styleBall(ball);
  return ball;
}

// function stylePedestal(pedestal) {
//   pedestal.style.height = '25px';
//   pedestal.style.width = '100px';
//   pedestal.style.backgroundColor = 'brown';
// };

function createPedestal () {
  pedestal = document.createElement('div');
  pedestal.id = 'pedestal';
  // stylePedestal(pedestal);
  return pedestal;
}

// function styleFloor (floor) {
//   floor.style.width = 'max-content()';
//   floor.style.height = '30px';
//   floor.style.background = '#6df0c2';
//   floor.style.bottom = '0';
//   floor.style.position =  'absolute';
// }

function createFloor () {
  floor = document.createElement('div');
  floor.id = 'floor';
  // styleFloor(floor);
  return floor;
}

function createBallGame () {
  const ball = createBall();
  const pedestal = createPedestal();
  const floor = createFloor();

  ball.after(document.getElementById('age-input-section'));
  pedestal.after(ball)
  floor.after(pedestal)
}
  
//   document.getElementById('ball-game').appendChild(ball)
//   document.getElementById('ball-game').appendChild(pedestal)
//   document.getElementById('ball-game').appendChild(floor)
// }
  
  createProgrammingLangSection()
  createAgeSection()
  createBallGame()
  createButton()
  
