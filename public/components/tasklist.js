function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.currentTarget.appendChild(document.getElementById(data));
}

function createTask(){
  var x = document.getElementById("inprogress");
  var y = document.getElementById("done");
  var z = document.getElementById("create-new-task-block");
var i = document.getElementById("review");
  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
      i.style.display = "block";
      z.style.display = "none";
  } else {
      x.style.display = "none";
      y.style.display = "none";
      i.style.display = "none";
      z.style.display = "flex";
  }
}

function saveTask(){

updateEmpty();
  // var saveButton = document.getElementById("save-button");
  // var editButton = document.getElementById("edit-button");
  // if (saveButton.style.display === "none") {
  //     saveButton.style.display = "block";
  //     editButton.style.display = "none";
  // } else{
  //     saveButton.style.display = "none";
  //     editButton.style.display = "block";
  // }

  let todo = document.getElementById("todo");
  var taskName = document.getElementById("taskInput").value 
    var othername = document.getElementById("dueDateInput").value;
  todo.innerHTML += `
  <div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
      <span id=taskName>${taskName}</span>
      <br>
      <span id=otherName>${othername}</span>
  </div>`  
}

function editTask(){
  var saveButton = document.getElementById("save-button");
  var editButton = document.getElementById("edit-button");
  if (saveButton.style.display === "none") {
      saveButton.style.display = "block";
      editButton.style.display = "none";
  } else{
      saveButton.style.display = "none";
      editButton.style.display = "block";
  }
}


const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

form.addEventListener("submit", function(event){
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

var taskListArray = [];

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
}

function renderTask(task){

  updateEmpty();

  // Create HTML elements
  let item = document.createElement("div");
  item.setAttribute('data-id', task.id);

  var taskName = document.getElementById("taskInput").value 
              var othername = document.getElementById("dueDateInput").value;
            item.innerHTML += `
            <div class="task" id=taskName.toLowerCase().split(" ").join("")>
                <span id=taskName>${taskName}</span>
                <br>
                <span id=otherName>${othername}</span>
            </div>`  
  

  todo.appendChild(item);

  // Extra Task DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);


  // Event Listeners for DOM elements
  delButton.addEventListener("click", function(event){
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

function removeItemFromArray(arr, index){
    if (index > -1){
        arr.splice(index, 1);
    }
    return arr;
}

function updateEmpty() {
    if (taskListArray.length > 0){
        document.getElementById('emptyList').style.display = 'none';
    } else {
        document.getElementById('emptyList').style.display = 'block';
    }
}
