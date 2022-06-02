// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dvZ2K":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "05f9593b99d6e682";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"03Be6":[function(require,module,exports) {
//main js file
var _tasklist = require("./components/tasklist");
var _kanban = require("./components/kanban");
var _stopwatch = require("./components/stopwatch");
var _tab = require("./components/tab");
var _dictionary = require("./components/dictionary");
var _localstorage = require("./localstorage");
var _pomodoro = require("./components/pomodoro");
var _musicplayer = require("./components/musicplayer");

},{"./components/tasklist":"8p0n0","./components/kanban":"ikPP4","./components/stopwatch":"cDUD9","./components/tab":"7tQzc","./components/dictionary":"7H6tn","./localstorage":"grXFK","./components/pomodoro":"cZcq5","./components/musicplayer":"6kgM4"}],"8p0n0":[function(require,module,exports) {
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
});
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
    item.innerHTML += `\n            <div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true">\n            <span id=taskName>${taskName}</span>                \n               <span id=completionTime>${completionTime}</span> \n                <br><br>\n                <span id=dueDate>${dueDate}</span>\n                \n            </div>`;
    var status = document.getElementById("task-status").value;
    switch(status){
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
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex((task1)=>task1.id === Number(id)
        );
        removeItemFromArray(taskListArray, index);
        console.log(taskListArray);
        updateEmpty();
        item.remove();
    });
    // Clear the input form
    form.reset();
}
function removeItemFromArray(arr, index) {
    if (index > -1) arr.splice(index, 1);
    return arr;
}
function updateEmpty() {
    if (taskListArray.length > 0) document.getElementById('emptyList').style.display = 'none';
    else document.getElementById('emptyList').style.display = 'block';
}
// add column
function addColunm() {
    let column = document.createElement("div");
    column.className = 'kanban-block';
    column.innerHTML += `<div class="kanbanName"><input type="text" \n  title="edit colunm name"\n  value="Unnamed"></div>`;
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
boxes.forEach((box)=>{
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

},{}],"ikPP4":[function(require,module,exports) {
function createTask() {
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
// function saveTask(){
//   updateEmpty();
//     // var saveButton = document.getElementById("save-button");
//     // var editButton = document.getElementById("edit-button");
//     // if (saveButton.style.display === "none") {
//     //     saveButton.style.display = "block";
//     //     editButton.style.display = "none";
//     // } else{
//     //     saveButton.style.display = "none";
//     //     editButton.style.display = "block";
//     // }
//     let todo = document.getElementById("todo");
//     var taskName = document.getElementById("taskInput").value 
//       var othername = document.getElementById("dueDateInput").value;
//     todo.innerHTML += `
//     <div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
//         <span id=taskName>${taskName}</span>
//         <br>
//         <span id=otherName>${othername}</span>
//     </div>`  
// }
function editTask() {
    var saveButton = document.getElementById("save-button");
    var editButton = document.getElementById("edit-button");
    if (saveButton.style.display === "none") {
        saveButton.style.display = "block";
        editButton.style.display = "none";
    } else {
        saveButton.style.display = "none";
        editButton.style.display = "block";
    }
}
document.getElementById("task-button").addEventListener("click", createTask);
document.getElementById("save-button").addEventListener("click", createTask);
document.getElementById("cancel-button").addEventListener("click", createTask);
document.getElementById("edit-button").addEventListener("click", editTask);

},{}],"cDUD9":[function(require,module,exports) {
let [milliseconds, seconds, minutes, hours] = [
    0,
    0,
    0,
    0
];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
document.getElementById('startTimer').addEventListener('click', ()=>{
    if (int !== null) clearInterval(int);
    int = setInterval(displayTimer, 10);
});
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [
        0,
        0,
        0,
        0
    ];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});
function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

},{}],"7tQzc":[function(require,module,exports) {
const toggler = document.querySelector('.help');
const tab = document.querySelector('.tab');
const icon = document.querySelector('.material-icons');
/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */ toggler.addEventListener('click', ()=>{
    toggler.classList.toggle('active');
    tab.classList.toggle('active');
    icon.classList.toggle('active');
});
function switchTimer() {
    var x = document.getElementById("stopwatch");
    var z = document.getElementById("pomodoro");
    if (x.style.display === "none") {
        x.style.display = "block";
        z.style.display = "none";
    } else {
        z.style.display = "block";
        x.style.display = "none";
    }
}
document.getElementById("stopwatchSwitch").addEventListener("click", switchTimer);
document.getElementById("pomodoroSwitch").addEventListener("click", switchTimer);

},{}],"grXFK":[function(require,module,exports) {
function addToLocalStorage(task) {
    // conver the array to string then store it.
    localStorage.setItem("kanbanTask", JSON.stringify(taskListArray));
// render them to screen
}

},{}],"cZcq5":[function(require,module,exports) {
//createa timer variable for traditional pomodoro session
const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    //create sessions variable to keep track of the number of pomodoro sessions
    sessions: 0
};
//Declare an interval variable 
let interval;
//Eventlistener
const mainButton = document.getElementById('js-btn');
mainButton.addEventListener('click', ()=>{
    //store the value of the data-action attribute on the button in an action variable
    const { action  } = mainButton.dataset;
    //check the value if it’s equal to 'start'
    if (action === 'start') startTimer();
    else stopTimer();
});
const modeButtons = document.querySelector('#js-mode-buttons');
modeButtons.addEventListener('click', handleMode);
function getRemainingTime(endTime) {
    //store the value of the difference between the current time and the end time in milliseconds
    const currentTime = Date.parse(new Date());
    const difference = endTime - currentTime;
    //converted the value to an integer in base 10
    const total = Number.parseInt(difference / 1000, 10);
    const minutes = Number.parseInt(total / 60 % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);
    return {
        //stored the value
        total,
        minutes,
        seconds
    };
}
function startTimer() {
    //retrieve the timestamp of the current moment
    let { total  } = timer.remainingTime;
    const endTime = Date.parse(new Date()) + total * 1000;
    //sessions incremented at the start of a pomodoro session
    if (timer.mode === 'pomodoro') timer.sessions++;
    //change value of the data-action attribute & text content
    mainButton.dataset.action = 'stop';
    mainButton.textContent = 'stop';
    mainButton.classList.add('active');
    interval = setInterval(function() {
        timer.remainingTime = getRemainingTime(endTime);
        updateClock();
        total = timer.remainingTime.total;
        if (total <= 0) {
            clearInterval(interval);
            //auto switch to the next session on completion of the current one
            switch(timer.mode){
                case 'pomodoro':
                    if (timer.sessions % timer.longBreakInterval === 0) switchMode('longBreak');
                    else switchMode('shortBreak');
                    break;
                default:
                    switchMode('pomodoro');
            }
            //display notice
            if (Notification.permission === 'granted') {
                const text = timer.mode === 'pomodoro' ? 'Get back to work!' : 'Take a break!';
                new Notification(text);
            }
            startTimer();
        }
    }, 1000);
}
//stop the timer
function stopTimer() {
    clearInterval(interval);
    mainButton.dataset.action = 'start';
    mainButton.textContent = 'start';
    mainButton.classList.remove('active');
}
//update the countdown portion of the application
function updateClock() {
    const { remainingTime  } = timer;
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');
    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');
    min.textContent = minutes;
    sec.textContent = seconds;
    const progress = document.getElementById('js-progress');
    progress.value = timer[timer.mode] * 60 - timer.remainingTime.total;
}
function switchMode(mode) {
    //mode property is set to the current mode
    timer.mode = mode;
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0
    };
    document.querySelectorAll('button[data-mode]').forEach((e)=>e.classList.remove('active')
    );
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document.getElementById('js-progress').setAttribute('max', timer.remainingTime.total);
    updateClock();
}
function handleMode(event) {
    //retrive value of the data-mode attribute from the target element
    const { mode  } = event.target.dataset;
    if (!mode) return;
    switchMode(mode);
    stopTimer();
}
document.addEventListener('DOMContentLoaded', ()=>{
    //request for granding display notification 
    if ('Notification' in window) {
        if (Notification.permission !== 'granted' && Notification.permission !== 'denied') Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') new Notification('Awesome! You will be notified at the start of each session');
        });
    }
    //ensure that the mode and remainingTime properties are set on the timer object on page load
    switchMode('pomodoro');
});

},{}],"6kgM4":[function(require,module,exports) {
const audio = document.querySelector('audio');
const playBtn = document.querySelector('#play');
const preveBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const songList = document.querySelector('.song-list');
const title = document.querySelector('#songTitle');
const record = document.querySelector('.cover-image');
const toggler = document.querySelector('.play-btn');
const coverImg = document.querySelector('.cover-image');
// active the cover image 
toggler.addEventListener('click', ()=>{
    coverImg.classList.toggle('active');
});
document.querySelector('.list-btn').addEventListener('click', ()=>{
    document.querySelector('.song-list').classList.toggle('active');
});
let songArray = []; //set a array for storing song
let songHeading = '';
let songIndex = 0; //initial index number
let isPlaying = false;
function loadAudio() {
    audio.src = songArray[songIndex]; // pass data src in array to audio src
    let songListItems = songList.getElementsByTagName('li');
    songHeading = songListItems[songIndex].getAttribute('data-name'); //pass value of data-name into songHeading
    songTitle.innerText = songHeading; //pass songHeading into html which displays title of songs
    //get each data value in the array
    for(i = 0; i < songListItems.length; i++)songListItems[i].classList.remove('active');
    songList.getElementsByTagName('li')[songIndex].classList.add('active');
}
//send the value of data-src into the array
function loadSongs() {
    let songs = songList.getElementsByTagName('li');
    for(i = 0; i < songs.length; i++)songArray.push(songs[i].getAttribute('data-src'));
    loadAudio();
}
loadSongs(); // ready the songs
function playAudio() {
    audio.play(); //play audio src 
    play.innerHTML = '<i class="material-icons"  style="font-size:60px;">pause</i>'; // change display icon
    isPlaying = true;
}
function pauseAudio() {
    audio.pause();
    play.innerHTML = '<i class="material-icons"  style="font-size:60px;">play_circle</i>'; // change display icon
    isPlaying = false;
}
function nextSong() {
    songIndex++; // increase index
    if (songIndex > songArray.length - 1) songIndex = 0;
    loadAudio();
}
function previousSong() {
    songIndex--;
    if (songIndex < 0) songIndex = songArray.length - 1;
    loadAudio();
}
//Eventlistener
playBtn.addEventListener('click', function() {
    if (isPlaying) pauseAudio();
    else playAudio();
}, false);
preveBtn.addEventListener('click', function() {
    previousSong();
}, false);
nextBtn.addEventListener('click', function() {
    nextSong();
}, false);
songList.addEventListener('click', function(e) {
    songIndex = e.target.closest('li').getAttribute('data-index');
    loadAudio();
}, false);

},{}]},["dvZ2K","03Be6"], "03Be6", "parcelRequire60da")

//# sourceMappingURL=index.99d6e682.js.map
