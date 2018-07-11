var button_content=document.queryselector ('div') ;
button_content.addEventListener (' click, updateName') ;
function updateName(){
    var name = prompt("snowy");
    button_content.textContent = 'player 1:' + name;
}

