let input = document.querySelector(".task-input");
// console.log(input);

let ul = document.querySelector("ul");

var colors = ["#fcabab","#ecffa8","#84df71","#83c5f1","#fdb5f1"];

function taskDeleter(e){
    e.currentTarget.remove();
}

input.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        let task = input.value;
        console.log(task);
        if(task == ""){
            alert("Enter a valid task");
            return;
        }
    input.value = "";
//     var li = document.createElement("li");
//     li.innerText = task;
//     ul.insertBefore(li,ul.firstChild);
        let li = `<li class="task-item"><div class="task-item-card" style="background-color:${ colors[Math.floor(Math.random() * colors.length)]};">
        <div class="task-text">
        ${task}
        </div>
        <div class="icons-div">
        <span class="material-icons">
            edit
            </span>
        <span class="material-icons">
            highlight_off
        </span>
        </div>
    </div></li>`;
        let mli = ul.innerHTML;
        let finalHtml = li + mli;
        ul.innerHTML = finalHtml;
    }
})
