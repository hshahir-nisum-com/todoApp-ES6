
class Todo {
    
    constructor(data) {
      this.data = data;
      this.addTask = this.addTask.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.addTask = this.addTask.bind(this)
    }

    renderList(unorderList){
        let li = document.createElement('li');
        li.className = 'listItem';
        li.appendChild(document.createTextNode(this.data));
        unorderList.appendChild(li);

        let btn = document.createElement('INPUT');
        btn.setAttribute("type","submit");
        btn.setAttribute("Value","delete");
        btn.className = 'btn1';
        li.appendChild(btn);
        
        document.getElementById('item').value = null
    }

    addTask(unorderList) {
        this.renderList(unorderList)
      }
      
    deleteTask(e,ul) {
        ul.removeChild(e.target.parentElement);     
      }
      

}


const form = document.getElementById('form');
const ul = document.getElementById('unoder');

let TodoApp = ""
let todoList = ""
form.addEventListener('submit',()=>{
    let newItem = document.getElementById('item').value.trim();
    console.log("newItem", newItem)
    if (newItem){
        todoList = newItem
    }
     TodoApp = new Todo(todoList)
    TodoApp.addTask(ul)
})

ul.addEventListener('click',(e)=>{
    TodoApp.deleteTask(e,ul)
})

