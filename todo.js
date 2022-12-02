const textBox = document.getElementById('input');
const error = document.getElementById('error');
const todoList = document.getElementById('listParent');
let handleTodo = () => {
  if (input.value.length < 2 || input.value == ``) {
    warn.textContent = `please write what you want to do`;
    return
  }
  i++;
  let li = document.createElement('li');
  list.push(input.value);
  //reset the value in the textbox
  input.value = '';
 /* list.forEach((item) => {
   console.log(`${list[list.indexOf(item)]}` );
    li.appendChild(document.createTextNode(`${list[list.indexOf(item)]}`));
  }); */
  // console.log(`${list} and i = ${i}`);

   li.appendChild(document.createTextNode(list[i]));
   todoList.appendChild(li);
}

let addBtn = document.getElementById('add');
['click', 'keypress'].forEach(
  (event) => {
    addBtn.addEventListener(event, handleTodo);
  }
);
del.addEventListener('click', () => {
  list.pop();
  i--;
  todoList.children[i].remove();
  console.log(`${list} and i = ${i}`);
});
console.log(i);
