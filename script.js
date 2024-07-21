let todoList=localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) :[];


let arr=JSON.stringify(todoList);
localStorage.setItem("todoList",arr);

let str=localStorage.getItem('todoList');

let todoList1=JSON.parse(str);
console.log(todoList1);

function addTaskToLocalStorage(todoList) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}


displayItems();


addTodo=()=>{
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');

    let todoItem=inputElement.value;
    let todoDate=dateElement.value;

    todoList.push({item:todoItem,dueDate:todoDate});

    addTaskToLocalStorage(todoList);
    inputElement.value='';
    dateElement.value='';

    displayItems();


}

deliteItem=()=>{
    localStorage.clear();
}


function displayItems(){
    let displayElement=document.querySelector('.todo-container');
    
    let newHtml='';


    displayElement.innerText='';
    for(let i=0;i<todoList.length;i++){

        let{item,dueDate}=todoList[i];
        
        newHtml+=`
            <span>${item}</span>
            <span>${dueDate}</span>

            <button class="btn-delete"onclick="todoList.splice(${i},1);displayItems(); deliteItem();  ">Delete</button>

        `;
        localStorage.removeItem(i);
    }
    

    displayElement.innerHTML=newHtml;

    
}