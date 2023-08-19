const form = document.querySelector(".form-todo");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector(".todo-list");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const text = input.value;
    const li = document.createElement("li");
    li.innerHTML= `<span>${text}</span>
    <div class="todo-btn">
    <button class="btns done">Done</button>
    <button class="btns remove">Remove</button>
    </div>`
    ul.append(li);
    input.value = ""
})

ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        e.target.parentNode.parentNode.remove();
    }
    if(e.target.classList.contains("done")){
        e.target.parentNode.previousSibling.previousSibling.classList.toggle("line")
    }
})