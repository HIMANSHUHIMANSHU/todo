const input= document.querySelector('input');
const button = document.querySelector("button");
const taskList= document.querySelector(".list");


const inputhandler= function ()
{
    const newTask= input.value;
    const newElem=createTask(newTask);
        // addtotask.innerText = taskname;
    taskList.appendChild(newElem);
    input.value="";
    const deleteBtn= newElem.children[1];
    deleteBtn.addEventListener('click', function () {

        newElem.remove(); 
            
    })
    
}

function createTask(newTask)
{
    const div= document.createElement("div");
    const li= document.createElement('li');
    const button= document.createElement('button');
    button.innerText="Delete";

    li.textContent=newTask;
    div.appendChild(li);
    div.appendChild(button);
    return div;

} 
button.addEventListener("click",inputhandler);   
    
    
    
    
// const button1= document.createElement('button');
// button1.innerText= "Delete";
// button1.addEventListener("click",function ()
//  {
//     addtotask.remove;
        
//  })
// div.appendChild(button1);


 
