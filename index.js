const inputBox = document.getElementById('input-box');
const taskList = document.getElementById('taskList');

function addTask(){
    if(inputBox.value === ''){
        alert("The field is Empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
     
    }
    inputBox.value="";
    saveData();

}

taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
  taskList.innerHTML = localStorage.getItem("data")  
}
showTask();