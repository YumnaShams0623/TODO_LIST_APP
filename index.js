function addTask() {
    var taskInput = document.getElementById('input');
    var taskList = document.getElementById('list');
    if(!input.value.trim()){
        return alert("Todo can't be empty!")
    }



    var li = document.createElement('li');
    li.textContent = input.value;

    var removeButton = document.createElement('button')
    removeButton.textContent = 'Remove';
    removeButton.onclick = function(){
        taskList.removeChild(li);
    }

    li.onclick = function(){
        li.classList.toggle('completed');
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    input.value = '';
}