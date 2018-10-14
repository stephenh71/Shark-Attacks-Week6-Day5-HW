document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleFormSubmit = function(event) {
    event.preventDefault()

    const container = document.createElement('div')

    const createName = document.createElement('p');
    createName.textContent = `Name: ${event.target.name.value}`;
    container.appendChild(createName)

    const createAge = document.createElement('p')
    createAge.textContent = `Age: ${event.target.age.value}`;
    container.appendChild(createAge)

    const createLocation = document.createElement('p')
    createLocation.textContent = `Location: ${event.target.location.value}`;
    container.appendChild(createLocation)

    const createOutcome = document.createElement('p')
    createOutcome.textContent = `Outcome: ${event.target.outcome.value}`;
    container.appendChild(createOutcome)
    //
    // const createInjury = document.createElement('p')
    // createInjury.textContent = `Injury: ${event.target.injury.value}`;
    // container.appendChild(createInjury)

    const startPoint = document.querySelector('#shark-attack-file');
    startPoint.appendChild(container);
debugger;
    const form = event.target;
    form.reset();
  };

  const handleDeleteBtnClicked = function(event){
    const sharkAttackFile = document.querySelector('#shark-attack-file');
    while(sharkAttackFile.firstChild){sharkAttackFile.removeChild(sharkAttackFile.firstChild)
    };
  };

  const handleOtherLocationRadio = function(event){

  };



  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit',handleFormSubmit);

  const deleteBtn = document.querySelector('#deleteAll');
  deleteBtn.addEventListener('click', handleDeleteBtnClicked);

});
