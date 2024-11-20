const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/**
 * Add a task to the list
 * @function addTask
 */
function addTask(){
    /**
     * Check if the input box is empty
     * If it is, show an alert message
     * If not, create a new list item, set its content to the input box value
     * and append it to the list container
     */
    if(inputBox.value===''){
        alert("You must write something");
    }  
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
     
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML =  localStorage.getItem("data");
}
showTask();