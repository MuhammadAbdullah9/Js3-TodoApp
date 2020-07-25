var todos = document.getElementById("Todos")

function addItem() {
    var items = document.getElementById("items")
    var lists = document.createElement("li")
    var list_value = document.createTextNode(items.value)

    var delBtn = document.createElement("button")
    var BtnText = document.createTextNode("Remove")
    delBtn.setAttribute("class", "Btn")
    delBtn.setAttribute("onclick" , "remove(this)")
    delBtn.appendChild(BtnText)

    var editBtn=document.createElement("button")
    var BtnText1=document.createTextNode("Edit")
    editBtn.setAttribute("class", "Btn1")
    editBtn.setAttribute("onclick", "edit(this)")
    editBtn.appendChild(BtnText1)
    
    lists.appendChild(list_value)
    lists.appendChild(delBtn)
    lists.appendChild(editBtn)

    lists.setAttribute("class", "color")

    todos.appendChild(lists)

    items.value = ""
}
function remove(e){
    e.parentNode.remove()
}
function deleteItems(){
    document.getElementById("Todos").innerHTML=""
}
function edit(e){
    var val=prompt("Edit your Todo", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val
}