import './components/tasklist';
import './components/kanban';
import './components/stopwatch'
import './components/tab';
import './components/dictionary';
import './localstorage';
import './components/pomodoro';
import './components/musicplayer';



var x = document.getElementById("inprogress");
    var y = document.getElementById("done");
    var z = document.getElementById("create-new-task-block");
    var i = document.getElementById("review");
// const item = document.querySelector('.eachTask');

// item.addEventListener('dragstart', dragStart);

// x.addEventListener('dragover', allowDrop);
// x.addEventListener('drop', drop);

// const item = document.getElementsByClassName('task');
// item.addEventListener('dragstart', dragStart);

// function dragStart(ev) {
//     ev.dataTransfer.setData('text', ev.target.id);

// }


/* drop targets */
// const boxes = document.querySelectorAll('.kanban-block');
// boxes.forEach((box) => {
//     box.addEventListener('dragover', allowDrop);
//     box.addEventListener('drop', drop);
//   });


// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData('text');
//     // ev.currentTarget.appendChild(document.getElementById(data));


//     var z = document.createElement('div'); // is a node
//     // z.innerHTML = data;
//     z.innerHTML = data;
//     ev.currentTarget.appendChild(z);
// }
