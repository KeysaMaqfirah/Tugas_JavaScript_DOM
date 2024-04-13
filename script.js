// Function to add a new task
function addTask(taskName) {
    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    li.className = "list-group-item task-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${taskName}</span>
      <div>
        <button class="btn btn-info btn-sm edit-task">Edit</button>
        <button class="btn btn-danger btn-sm delete-task">Hapus</button>
        <button class="btn btn-success btn-sm complete-task">Selesai</button>
      </div>
    `;
    taskList.appendChild(li);
  }
  

  // Event listener for form submission
  document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("task-input");
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
      addTask(taskName);
      taskInput.value = "";
    }
  });


  
  // Event delegation for delete, complete, and edit buttons
document.getElementById("task-list").addEventListener("click", function(event) {
    const target = event.target;
    const taskItem = target.closest(".task-item");
    if (target.classList.contains("delete-task")) {
      target.classList.add("btn-clicked");
      setTimeout(() => {
        taskItem.remove();
      }, 100);
      
    } else if (target.classList.contains("complete-task")) {
      taskItem.classList.toggle("completed");
      if (taskItem.classList.contains("completed")) {
        // Hapus tugas dari daftar setelah 500ms jika sudah selesai
        setTimeout(() => {
          taskItem.remove();
        }, 500);
      }

    } else if (target.classList.contains("edit-task")) {
      const taskName = taskItem.querySelector("span").textContent;
      const newTaskName = prompt("Edit task:", taskName);
      if (newTaskName !== null && newTaskName !== "") {
        taskItem.querySelector("span").textContent = newTaskName;
      }
    }
  });
  
  

  // Add animation class to buttons when clicked
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function() {
      this.classList.add("btn-animated");
      setTimeout(() => {
        this.classList.remove("btn-animated");
      }, 300);
    });
  });
  