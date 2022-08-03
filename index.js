let arr = [
  {
    id: 123,
    task: "buy milk",
  },
  {
    id: 321,
    task: "buy eggs",
  },
  {
    id: 234,
    task: "clean my room",
  },
  {
    id: 543,
    task: "watch any js video in youtube",
  },
];

//function to draw a new task
const addTask = () => {
  const inputValue = document.getElementById("taskInput").value;
  const input = document.getElementById("taskInput");
  //  let input = obj1
  if (!inputValue.trim()) {
    alert("Incorrect value. Check if provided");
    input.value = null;
    return;
  }

  const newTask = {
    id: new Date().getTime(),
    task: inputValue,
  };

  arr.push(newTask);
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

function deleteItem() {
  arr = arr.filter((val) => val.id !== +this.id);
  drawTaskList();
}

const drawTaskList = () => {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = null;
  arr.forEach((value, ind) => {
    //creating elements
    const myLi = document.createElement("li");
    const myInput = document.createElement("input");
    const myLabel = document.createElement("label");
    const deleteBtn = document.createElement("button");

    //adding styles
    myLi.className = "container list-group-item";
    myInput.className = "form-check-input me-1 col-1";
    myLabel.className = "form-check-label col-9";
    deleteBtn.className = "btn btn-danger btn-sm col-2";

    //adding other attributes
    //input
    myInput.setAttribute("type", "checkbox");
    myInput.setAttribute("id", ind);

    //label
    myLabel.setAttribute("for", ind);
    myLabel.textContent = value.task;

    //delete btn
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("id", value.id);
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = deleteItem;

    //append childs
    myLi.append(myInput, myLabel, deleteBtn);
    tasksList.append(myLi);
  });
};

drawTaskList();
