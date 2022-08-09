//function to draw a new task
const addTask = () => {
  const inputValue = document.getElementById("taskInput").value;
  const input = document.getElementById("taskInput");

  if (!inputValue.trim()) {
    alert("Incorrect value. Check if provided");
    input.value = null;
    return;
  }

  const newTask = {
    id: new Date().getTime(),
    task: inputValue,
  };

  const lsArr = JSON.parse(window.localStorage.getItem("tasks"));
  let arr = lsArr ? lsArr : [];
  arr.push(newTask);

  window.localStorage.setItem("tasks", JSON.stringify(arr));

  input.value = null;
  drawTaskList();
};

document.getElementById("addBtn").addEventListener("click", addTask);

//draw new task on Enter
document.getElementById("taskInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

const drawTaskList = () => {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = null;

  //get data from localStorage
  const lsArr = JSON.parse(window.localStorage.getItem("tasks"));
  let arr = lsArr ? lsArr : [];

  arr.forEach((singleTask, ind) => {
    //creating elements
    const myLi = document.createElement("li");
    const myInput = document.createElement("input");
    const myLabel = document.createElement("label");
    //btn group
    const btnGroup = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    //adding styles
    myLi.className = "container list-group-item";
    myInput.className = "form-check-input me-1 col-1";
    myLabel.className = "form-check-label col-9";

    btnGroup.className = "btn-group col-2";
    deleteBtn.className = "btn btn-outline-danger btn-sm ";
    editBtn.className = "btn btn-outline-primary btn-sm";

    //adding other attributes
    //input
    myInput.setAttribute("type", "checkbox");
    myInput.setAttribute("id", ind);

    //label
    myLabel.setAttribute("for", ind);
    myLabel.textContent = singleTask.task;

    //btn group
    btnGroup.setAttribute("role", "group");

    //delete btn
    deleteBtn.setAttribute("type", "button");
    deleteBtn.textContent = "Delete";

    //edit btn
    editBtn.setAttribute("type", "button");
    editBtn.textContent = "Edit";

    //append childs
    //handle btn group append
    btnGroup.append(editBtn, deleteBtn);
    myLi.append(myInput, myLabel, btnGroup);
    tasksList.append(myLi);

    //task events
    deleteBtn.addEventListener("click", () => {
      arr = arr.filter((filterTask) => filterTask.id !== singleTask.id);
      window.localStorage.setItem("tasks", JSON.stringify(arr));
      drawTaskList();
    });

    editBtn.addEventListener("click", () => {
      const updatedTask = prompt("Update your task:", singleTask.task);

      if (updatedTask?.trim()) {
        const newTask = {
          ...singleTask,
          task: updatedTask,
        };

        arr.splice(ind, 1, newTask);
        drawTaskList();
      }
    });
  });
};

drawTaskList();
