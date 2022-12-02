const textBox = document.getElementById('input');
const error = document.getElementById('error');
const todoList = document.getElementById('listParent');
//logic to create todo
let createList = (text) => {
  let list = document.createElement('li');
  let todo = document.createTextNode(text);
  let doneBtn = document.createElement('button');
  let done = document.createTextNode('done');
  doneBtn.appendChild(done);
  list.appendChild(todo);
  list.appendChild(doneBtn);
  todoList.appendChild(list);
  doneBtn.addEventListener('click',
 function() { 
this.parentElement.style.display = 'none' 
});
  }
//function to create todo
function addTodo(){
//ensure input is not empty
textBox.value == '' ? error.innerText = 'empty todo'

createList(`${textBox.value}`);
//reset input
textBox.value = ''
}
