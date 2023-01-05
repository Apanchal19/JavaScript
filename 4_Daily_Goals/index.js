const title=document.getElementById("title");
const description= document.getElementById("description")
const form  = document.querySelector("form");
const container = document.querySelector(".container");


const tasks = localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks"))
: [];

showAllTasks();

function showAllTasks(){
    tasks.forEach((value,index)=>{
        const div =document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class","deletebtn");

    btn.innerText="-";

    btn.addEventListener("click",()=>{
        removeTask();
        tasks.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showAllTasks();

    });

    div.append(btn);
    container.append(div);

    });


}


function removeTask(){
    tasks.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();

    });

}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTask();
    
    tasks.push({
        title: title.value,
        description: description.value,
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
    console.log(tasks);
    showAllTasks();
});