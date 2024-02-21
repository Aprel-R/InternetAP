const submit = document.getElementById('submit');
const newTask = document.getElementById('task');

submit.disabled = true;

function toggleSubmitButton(enabled) {
    submit.disabled = !enabled;
}

newTask.addEventListener('input', function(event) {
    // Enable/disable the submit button based on whether there is text typed into the input field
    toggleSubmitButton(newTask.value.trim().length > 0);
});


document.querySelector('form').addEventListener('submit', function(event) {    
    event.preventDefault();
   
    const taskValue = newTask.value.trim();
    
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;
    
    document.getElementById('tasks').appendChild(listItem);
    
    newTask.value = '';
    
    return false;
});
