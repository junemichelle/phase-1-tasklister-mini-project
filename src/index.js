document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // document.addEventListener("submit", function (event) {
  //   event.preventDefault();
  // });
  let submitForm = document.getElementById("create-task-form");
  let textInput = document.getElementById("new-task-description");
  let submitButton = document.getElementById("submit-button");
  let taskList = document.getElementById("tasks");

  //tasklist

  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let click = textInput.value;
    console.log(click);

    // if ( text !== '' ) {
    //   todo.innerHTML += '<li>' + text + ' <button onclick="Delete(this);">Delete</button> </li>';
    //   field.value = '';
    //   //field.focus();
    //}
    // Create an "li" node:
    const node = document.createElement("li");

    // Create a text node:
    const textnode = document.createTextNode(textInput.value);

    // Append the text node to the "li" node:
    node.appendChild(textnode);

    // Append the "li" node to the list:
    taskList.appendChild(node);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    const deleteText = document.createTextNode("  ⨂");
    deleteButton.appendChild(deleteText);
    node.appendChild(deleteButton);

    let identifyDelete = document.getElementsByClassName("delete-btn");
    identifyDelete = Array.from(identifyDelete); // Convert HTMLCollection to an array

identifyDelete.forEach((button) => {
  button.addEventListener("click", function () {
    const listItem = button.parentNode; // Use parentNode to get the <li> element
    listItem.remove();
     });
    });
  });
});
