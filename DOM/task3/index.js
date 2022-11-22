export const getItemsList = () => {
  const itemsList = document.querySelectorAll('.technology');
  console.dir(itemsList);
  return itemsList;
}

getItemsList();

export const getItemsArray = () => {
  const itemsTool = document.querySelectorAll('.tool');
  const elementsArray = Array.from(itemsTool);
  console.dir(elementsArray);
  return elementsArray;
}

getItemsArray();