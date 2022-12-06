const finishList = () => {
    const parent = document.querySelector('.list');
    const firstItem = document.createElement('li');
    firstItem.textContent = '1';
    parent.prepend(firstItem);
    const listItem = document.querySelector('.special');
    const fourthItem = document.createElement('li');
    fourthItem.textContent = '4';
    listItem.before(fourthItem);
    const sixthItem = document.createElement('li');
    sixthItem.textContent = '6';
    listItem.after(sixthItem);
    const eightsItem = document.createElement('li');
    eightsItem.textContent = '8';
    parent.append(eightsItem);
};

finishList();
