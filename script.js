const input = document.getElementById('input');
const btn = document.getElementById('button');
const listContainer = document.getElementById('list-container');

class Todolist {
    constructor(value){
        this.value = value;
        this.date = new Date().toLocaleString('fr-FR');
    }
    makeDom(){
        const list = document.createElement('li');
        list.classList.add('todolist');
        list.innerHTML = `<span class="date"> ${this.date}</span><span class="todolist__list">${this.value}</span>`;
        listContainer.append(list);
        console.log(this.value, this.date);
    }
}

function handleOnClick(e){
    const inputValue = input.value;
    const todoList = new Todolist(inputValue);
    // console.log(todoList);
    todoList.makeDom();
}

btn.addEventListener('click', handleOnClick);