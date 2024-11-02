let tasks=[];
let task={
    
};

let counter=0;

function addTask() {
    // Get data from the input fields
    const taskName = document.getElementById("task_input").value;
    const taskDate = document.getElementById("date_input").value;
    const taskPriority = document.getElementById("priority_input").value;

    // new task object
    const newTask = {
        id: counter + 1,
        TName: taskName,
        TDate: taskDate,
        Tpriority: taskPriority,
    };

    tasks.push(newTask);

    counter++;

    showTasks();

    document.getElementById("task_form").reset();
}

function showTasks(){
    const TBody=document.getElementById("tasks_list");
    TBody.innerHTML="";
    for(let i=0;i<tasks.length;i++){
        const tr=document.createElement("tr");
        TBody.appendChild(tr);

        const Tid= document.createElement("td");
        Tid.textContent=`${tasks[i].id}`;
        tr.appendChild(Tid);

        const tableName= document.createElement("td");
        tableName.textContent=`${tasks[i].TName}`;
        tr.appendChild(tableName);

        const TDate_1= document.createElement("td");
        TDate_1.textContent=`${tasks[i].TDate}`;
        tr.appendChild(TDate_1);

        const Tpriority_1= document.createElement("td");
        Tpriority_1.textContent=`${tasks[i].Tpriority}`;
        tr.appendChild(Tpriority_1);

        const buttonContainer=document.createElement("td");
        const editButton=document.createElement("button");
        editButton.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`;
        buttonContainer.appendChild(editButton);
        tr.appendChild(buttonContainer);

        
        const buttonContainer2=document.createElement("td");
        const deletButton=document.createElement("button");
        deletButton.innerHTML=`<i class="fa-solid fa-trash"></i>`;
        buttonContainer.appendChild(deletButton);
        tr.appendChild(buttonContainer2);




    }
}