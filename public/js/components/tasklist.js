const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");


form.addEventListener("submit", function (event) {
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  if (task) {
    addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
  }
})

//create array for store tasks
var taskListArray = [];

//task detailed value
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    id: Date.now(),
    taskDescription,
    dueDate,
    dateCreated,
    estimatedTime,
    completionTime,
    priorityRating,
    estimatedTime,
    completionStatus
  };
  taskListArray.push(task);
  console.log(taskListArray);
  renderTask(task);
  addToLocalStorage(task);
}

function renderTask(task) {

  updateEmpty();

  // Create HTML elements
  let item = document.createElement("div");
  item.setAttribute('data-id', task.id);
  item.className = 'eachTask';

  var taskName = document.getElementById("taskInput").value;
  var dueDate = document.getElementById("dueDateInput").value;
  var completionTime = document.getElementById("completionTimeInput").value;
  item.innerHTML += `
            <div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true">
            <span id=taskName>${taskName}</span>                
               <span id=completionTime>${completionTime}</span> 
                <br><br>
                <span id=dueDate>${dueDate}</span>
                
            </div>`

  var status = document.getElementById("task-status").value;

  switch (status) {
    case 'todo':
      todo.appendChild(item);
      break;
    case 'inprogress':
      inprogress.appendChild(item);
      break;
    case 'done':
      done.appendChild(item);
      break;
    case 'review':
      review.appendChild(item);
  }

  // Extra Task DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);
  // item.setAttribute('draggable', true);
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('ondragstart', dragStart);

  // Event Listeners for DOM elements
  delButton.addEventListener("click", function (event) {
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    console.log(taskListArray);
    updateEmpty();
    item.remove();
  })

  // Clear the input form
  form.reset();
}

function removeItemFromArray(arr, index) {
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function updateEmpty() {
  if (taskListArray.length > 0) {
    document.getElementById('emptyList').style.display = 'none';
  } else {
    document.getElementById('emptyList').style.display = 'block';
  }
}

// add column
function addColunm() {
  let column = document.createElement("div")
  column.className = 'kanban-block';
  column.innerHTML += `<div class="kanbanName"><input type="text" 
  title="edit colunm name"
  value="Unnamed"></div>`
  // append column to kanban container
  kanbanBoard.appendChild(column);
}

 // Event Listeners for DOM elements
document.getElementById("kanban-heading").addEventListener("click", addColunm);

// drag & drop
function dragStart(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

const boxes = document.querySelectorAll('.kanban-block');
boxes.forEach((box) => {
    box.addEventListener('dragover', allowDrop);
    box.addEventListener('drop', drop);
  });


function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.currentTarget.appendChild(document.getElementById(data));
}



