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

const tasksList = document.getElementById("tasksList");

arr.forEach((value, ind) => {
  //creating elements
  const myLi = document.createElement("li");
  const myInput = document.createElement("input");
  const myLabel = document.createElement("label");

  //adding styles
  myLi.className = "list-group-item";
  myInput.className = "form-check-input me-1";
  myLabel.className = "form-check-label";

  //adding other attributes
  //input
  myInput.setAttribute("type", "checkbox");
  myInput.setAttribute("id", value.id);

  //label
  myLabel.setAttribute("for", value.id);
  myLabel.textContent = value.task;

  //append childs
  myLi.append(myInput, myLabel);
  tasksList.append(myLi);
});
