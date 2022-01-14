// Function to add values in the input element and if the letter exceded 
const values = document.getElementById('inputvalues');
function dialAdd(val){
    if(values.value.length < 10){
        values.value = values.value + val;  
    }
}

function deleteInput(){
    values.value = values.value.substring(0, values.value.length - 1);
}
