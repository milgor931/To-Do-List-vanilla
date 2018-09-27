function addTask() {
  //console
  var task = document.getElementById('inputText').value;
  console.log(task);
  document.getElementById('inputText').value = "";
  //document
  var newItem = document.createElement("li");
  var newCheckbox = document.createElement('input');
  var newTask = document.createElement('span');

  newCheckbox.type = 'checkbox';
  newTask.innerHTML = task;
  newItem.appendChild(newCheckbox);
  newItem.appendChild(newTask);
  console.log(task);
  console.log(newCheckbox.innerHTML);

  var list = document.getElementById('taskList');
  list.appendChild(newItem);
}

