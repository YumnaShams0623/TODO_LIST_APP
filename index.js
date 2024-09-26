var input = document.querySelector('#input');
var list = document.querySelector('#list');
input.addEventListener("keyup",function(event){
    if(event.key == Enter){
        addItem(this.value)
        this.value = ""
    }
})
var addItem = (input) => {
    var listItem = document.createElement("li");
    listItem.innerHTML = `${input}<i><i>`;

    list.appendChild(listItem);
}