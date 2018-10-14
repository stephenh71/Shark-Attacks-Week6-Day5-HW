document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleFormSubmit = function(event) {
    event.preventDefault();

    const container = document.createElement('tr');

    const createDate = document.createElement('td');
    createDate.textContent = `${event.target.date.value}`;
    container.appendChild(createDate);

    const createName = document.createElement('td');
    createName.textContent = `${event.target.name.value}`;
    container.appendChild(createName);

    const createAge = document.createElement('td');
    createAge.textContent = `${event.target.age.value}`;
    container.appendChild(createAge);

    const createLocation = document.createElement('td');
    createLocation.textContent = `${event.target.location.value}`;
    container.appendChild(createLocation);

    const createOutcome = document.createElement('td');
    createOutcome.textContent = `${event.target.outcome.value}`;
    container.appendChild(createOutcome);

    // const createSpecies = document.createElement('td');
    // createSpecies.textContent = speciesType(event.target.outcome.value);
    // container.appendChild(createSpecies);

    //
    // const createInjury = document.createElement('p')
    // createInjury.textContent = `Injury: ${event.target.injury.value}`;
    // container.appendChild(createInjury)

    const startPoint = document.querySelector('.shark_attack_table');
    startPoint.appendChild(container);

    const form = event.target;
    form.reset();

    // const speciesType = function(event.target.location.value){
    //     if(event.target.location.value === "Asia"){let species = "Tiger Shark"};
    //     elsif(event.target.location.value === "Carribean"){let species = "Bull Shark"};
    //     elsif(event.target.location.value === "North Africa"){let species = "Oceanic White Tip Shark"
    //     }else{let species = "Great White Shark"};
    //   return species;
    //   };
  };

  const handleDeleteBtnClicked = function(event){
    const sharkAttackFile = document.querySelector('.shark_attack_table');
    while(sharkAttackFile.firstChild){sharkAttackFile.removeChild(sharkAttackFile.firstChild)
    };
  };



  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit',handleFormSubmit);

  const deleteBtn = document.querySelector('#deleteAll');
  deleteBtn.addEventListener('click', handleDeleteBtnClicked);

});
