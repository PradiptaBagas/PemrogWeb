const addBtn = document.querySelector("#add-btn")
const newTaskInput = document.querySelector("#wrapper input")
const taskContainer = document.querySelector("#task")
const error = document.getElementById("error")
const taskValue = document.querySelector(".task-value")
let taskCount = 0

const displayCount = (taskCount) => { // menampilkan jumlah tugas
    taskValue.innerText = taskCount
}   

const addTask = () => {
    const taskName = newTaskInput.value.trim()
    error.style.display = "none"
    if(!taskName){
        setTimeout( () => {
            error.style.display = "block"
        }, 200)
        return
    }

    const task = `<div class="task">
    <input type="checkbox" class="task-check"><span class="taskname">${taskName}</span>
    <button class="edit"><i class="fa-solid fa-pen"></i></button><button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>`

    taskContainer.insertAdjacentHTML ("beforeend", task) // menyisipkan text html
    const deleteButtons = document.querySelectorAll(".delete")
    deleteButtons.forEach((button) => { // method perulangan element array
        button.onclick = () => {
            button.parentNode.remove() // mengembalikan node ke node yg ditentukan
            taskCount -= 1 
            displayCount(taskCount)
        }
    })

    const editButtons = document.querySelectorAll(".edit")
    editButtons.forEach((editBtn) => {
        editBtn.onclick = (e) => {
            let targetElement = e.target
            if(!(e.target.className == "edit")){ // kondisi untuk mentriger ke tombol editan
                targetElement = e.target.parentElement
            }
            newTaskInput.value = targetElement.previousElementSibling?.innerText // untuk memuat list msk ke dlm input
            targetElement.parentNode.remove() 
            taskCount -= 1 
            displayCount(taskCount)
        }
    })
    const taskCheck = document.querySelectorAll(".task-check")
    taskCheck.forEach((checkBox) => {
        checkBox.onchange = () => {
            checkBox.nextElementSibling.classList.toggle("completed") // menandakan list selesai 
            if(checkBox.checked){
                taskCount -= 1
            }
            else {
                taskCount += 1
            }
            displayCount(taskCount)
        }
    })
    taskCount += 1 
    displayCount(taskCount)
    newTaskInput.value = ""
}
addBtn.addEventListener("click", addTask) // memanggil button addTask

window.onload = () => { // Update window
    taskCount = 0 // Update jmlh tugas & mengosongkan inputan
    displayCount(taskCount)
    newTaskInput.value = ""

}


