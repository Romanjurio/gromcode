const checkboxElem = document.querySelector('.task-status');

const getCheckboxStatus = () => {
  console.log(checkboxElem.checked);

}

checkboxElem.addEventListener('change', getCheckboxStatus);