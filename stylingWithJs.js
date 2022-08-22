function styleAgeSection () {
    const ageDiv = document.getElementById('age-input-section')
    ageDiv.style.backgroundColor = 'gray';
    ageDiv.style.opacity = '90%'
    ageDiv.setAttribute('style',
    'background-color:gray; \
    opacity:90%; \
    width:211px;');
  }

  function styleProgrammingSection () {
    const listContainer = document.getElementById('programming-languages')
    const listItems = listContainer.children
    //Make programming languages chage colors when hovered over.
    listContainer.style.width = '211px';
    rainbow = ['black','brown','red','darkgoldenrod','yellow','green','turquoise','blue','violet','cornflowerblue','pink','cornflowerblue'];
    let count = 0
    for (let item of listItems) {
        item.addEventListener('mouseover',function() {
            item.style.color = rainbow[count];
            count >= rainbow.length - 1 ? count = 0 : count ++;
        })
        item.addEventListener('mouseout',function() {
            item.style.color = 'black';
        })
    }
    document.getElementById('programming-language-div').style.border = 'inset #b2bac8 5px';
  }



  styleProgrammingSection()
  styleAgeSection()

