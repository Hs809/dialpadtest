function myFunction() {
    document.getElementById("inputvalues").innerHTML = "Hello World";
} 
function dialAdd(val){
    if(document.getElementById('inputvalues').value.length < 10){
        document.getElementById('inputvalues').value = document.getElementById('inputvalues').value + val;  
    }
}
function deleteInput(){
    console.log(document.getElementById('inputvalues').value.length);
    document.getElementById('inputvalues').value = document.getElementById('inputvalues').value.substring(0, document.getElementById('inputvalues').value.length - 1);
}
