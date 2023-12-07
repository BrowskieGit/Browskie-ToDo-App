// Year format show javascript
const d = new Date();
let year = d.getFullYear();
document.getElementById("jsYear").innerHTML = year;

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u2718");
  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("\u270E");
  span.className = "close";
  span1.className = "edit";
  span1.id = "btn" + i;
  span.appendChild(txt);
  span1.appendChild(txt1);
  myNodelist[i].appendChild(span);
  myNodelist[i].appendChild(span1);
  myNodelist[i].setAttribute("id", "li" + i);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    div.className = "closedone";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
var qq = 0;
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.className = "active";
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u2718");
  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("\u270E");
  span.className = "close";
  span1.className = "edit";
  span1.id = "Newbtn" + qq;
  span.appendChild(txt);
  span1.appendChild(txt1);
  li.appendChild(span);
  li.appendChild(span1);
  li.setAttribute("id", "Newli" + qq);
  qq = qq + 1;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      div.className = "closedone";
    };
  }
  var edit1 = document.getElementsByClassName("edit");
  for (var j = 0; j < edit1.length; j++) {
    edit1[j].onclick = function (e) {
      var editbox = document.getElementById("editbox");
      editbox.style.display = "block";
      //alert(e.target.parentNode.id);
      var finder = e.target.parentNode.id;
      var edittext = document.getElementById("editInput");
      edittext.value = document.getElementById(finder).innerHTML;
      var change = document.getElementById("editContent");
      change.onclick = function () {
        document.getElementById(finder).innerHTML = edittext.value;
        editbox.style.display = "none";
      };
    };
  }
}

// Edit button show function
var edit = document.getElementsByClassName("edit");
for (var j = 0; j < edit.length; j++) {
  edit[j].onclick = function (e) {
    var editbox = document.getElementById("editbox");
    editbox.style.display = "block";
    //alert(e.target.parentNode.id);
    var finder = e.target.parentNode.id;
    var edittext = document.getElementById("editInput");
    edittext.value = document.getElementById(finder).innerHTML;

    var change = document.getElementById("editContent");
    change.onclick = function () {
      document.getElementById(finder).innerHTML = edittext.value;
      editbox.style.display = "none";
    };
  };
}

// Load this msg before page refresh or before window close
window.onbeforeunload = function () {
  return "Dude, Are you sure you want to leave? Think of the kittens!";
};

function statusCounter() {
  var taskcounter = document.getElementsByClassName("active").length;
  var taskCompleted = document.getElementsByClassName("checked").length;
  var taskhidden = document.getElementsByClassName("closedone").length;
  var taskPending = taskcounter - taskCompleted;
  var taskcompletionrate;
  if (taskcounter <= 0) {
    taskcompletionrate = 0;
  } else {
    taskcompletionrate = Math.round((taskCompleted / taskcounter) * 100);
  }
  document.getElementById("taskCount").innerHTML = taskcounter;
  document.getElementById("taskfinished").innerHTML = taskCompleted;
  document.getElementById("taskRemaining").innerHTML = taskPending;
  document.getElementById("taskcompletion").innerHTML =
    taskcompletionrate + "%";
}
setInterval(statusCounter, 1000);

var imageHead = document.getElementsByTagName("body")[0];
var counter = 0;
function changeBg() {
  var images = [
    "img/todolist_bg.png",
    "img/todolist_bg2.jpg",
    "img/purpil snow.gif",
    "img/gradient_2.png",
    "img/gradient.png",
    "img/watercolor.jpg",
    "img/snow_flow.gif",
    "img/BGSW_New_Background.png",
    "img/dark bg.gif",
  ];
  imageHead.style.backgroundImage = "url(" + images[counter] + ")";
  counter = counter + 1;
  if (counter == images.length) {
    counter = 0;
  }
}
setInterval(changeBg, 5000);