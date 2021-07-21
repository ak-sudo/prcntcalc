function redirector(){
    yourClass = Number(document.getElementById("class").value);
    
    if (yourClass >= 13){
        alert("You have entered an invalid class. Please Try Again!");
        window.location.reload(true);
    }
    if (yourClass >= 1){
        window.location.href = "/prcntcalc/calc.html";
    }
}
