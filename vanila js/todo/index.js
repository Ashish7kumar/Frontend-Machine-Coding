document.addEventListener('DOMContentLoaded',function (){
const form=document.querySelector('.todo-form');
const addButton=document.querySelector('.submitButton');
const form_input=document.querySelector('.todo-input');
const form_list=document.querySelector('.todo-list')
let todo_that_being_edited=null;
form.addEventListener("submit",function (event){
    
    event.preventDefault();
    const todo_text=form_input.value.trim();
    if(todo_text!=""){
        if(addButton.innerText==="Add"){
        let todo_element=AddTodo(todo_text);
        form_list.appendChild(todo_element);
        }
        else{
            let todo_element=AddTodo(todo_text);
            todo_that_being_edited.getElementsByTagName("span")[0].innerText = todo_element.getElementsByTagName("span")[0].innerText;
            addButton.innerText="Add";
        }
        form_input.value="";


    }
    else{
        alert("Please Enter a valid Task")
    }
})
form_list.addEventListener('click',function(event){
    const target=event.target
    if(target.tagName=='BUTTON')
    {
        if(target.innerText==="❌")
        {
            target.parentNode.remove();
        }
        if(target.innerText==="✒️")
        {
            form_input.value=target.parentNode.firstChild.innerText;
            addButton.innerText="Edit"
            todo_that_being_edited=target.parentNode;
            form_input.focus()
            


        }
    }
})



})
function AddTodo(todo_text){
    
    
    const editButton=document.createElement('button');
    const todo=document.createElement('li');
   
    const closeButton=document.createElement('button');
    todo.innerHTML=`<span>${todo_text}</span>`;
    editButton.innerText="✒️"
    closeButton.innerText="❌"
    todo.appendChild(editButton);
  todo.appendChild(closeButton);

    return todo;
}

