const getTitle = () => {
    return document.querySelector('.title').textContent;
};

console.log(getTitle());

const getDescription = () => {
  return document.querySelector('.about').innerText;
}

console.log(getDescription());

const getPlans = () => {
  return document.querySelector('.plans').innerHTML;
}

console.log(getPlans());

const getGoal = () => {
  return document.querySelector('.goal').outerHTML;
}

console.log(getGoal());