const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');
const createBtn = document.querySelector('.create-task-btn');

function updateTask(tasks) {
    return tasks.map(({ text, done }, ind) => {
        return {
            text,
            done,
            id: ind + 1,
        };
    });
}
let initState = updateTask(tasks);



const renderTasks = (tasksList) => {
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.dataset.id = id;
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            checkbox.addEventListener('click', handleCheckBox);
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};

// put your code here

renderTasks(initState);

function handleCheckBox(e) {
    let ind = initState.findIndex((task) => task.id == e.target.dataset.id);
    initState[ind].done = !initState[ind].done;
    listElem.innerHTML = '';
    renderTasks(initState);
};

const createTask = () => {
    if (taskInput.value === '') {
        return;
    }

    let newTask = {
        text: taskInput.value,
        done: false,
    };

    tasks.unshift(newTask);
    listElem.innerHTML = '';
    initState = updateTask(tasks);
    renderTasks(initState);
    taskInput.value = '';
};

createBtn.addEventListener('click', createTask);
