const addCompleted = (event) => {
  event.target.classList.toggle("completed");
};
// for (const li of listItems) {
//   li.addEventListener("click", addCompleted);
// }

const onAddToDo = (event) => {
  const text = event.target.parentNode.querySelector("input");
  let inputField = text.value;
  const newListItem = document.createElement("li");
  newListItem.addEventListener("click", addCompleted);
  const liText = document.createTextNode(inputField);

  newListItem.appendChild(liText);
  document.querySelector("ul").appendChild(newListItem);
  text.value = "";
};
document.querySelector("button").addEventListener("click", onAddToDo);
