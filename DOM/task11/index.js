const manageClasses = () => {
  const addedClass = document.querySelector('.one');
  addedClass.classList.add('selected');
  const removeClass = document.querySelector('.two');
  removeClass.classList.remove('selected');
  const toggleClass = document.querySelector('.three');
  toggleClass.classList.toggle('three_done');
  const addAnotherClass = document.querySelector('.four');
  addAnotherClass.classList.add('another-class');


}

manageClasses();