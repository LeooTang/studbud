function addToLocalStorage(task) {
    // conver the array to string then store it.
    localStorage.setItem("kanbanTask", JSON.stringify(taskListArray));
    // render them to screen
    renderTask(task);
  }
  
   var data = localStorage.getItem("kanbanTask");
  
   data = JSON.parse(data);
          console.log(data);
  
  renderTask(data);