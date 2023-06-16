document.getElementById("Btn").onclick = function () {
    let a = document.getElementById("txt").value;
    let symbol =  document.getElementById("txt1").value;
    for (let i = 0; i <= a; i++) {
        document.getElementById("label").innerHTML +=symbol;
  
    }
}

document.getElementById("Btn1").onclick = function(){
    window.location.reload();
}
