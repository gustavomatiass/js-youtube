// função de add tarefa
function addTask(){

    // TITULO   da terefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {

       //clona template 
       const template = document.querySelector(".template");

       const newTask = template.cloneNode(true);

       //add titulo
        newTask.querySelector(".task-list").textContent = taskTitle;

        // remover classes des
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // add tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

    }

}


//evento de add tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask()

});