function redirector(){
    yourClass = Number(document.getElementById("class").value);

    if (yourClass = 1){
        window.location.href = "/prcntcalc/calc.html";
    }
    else{
        alert("You have entered an invalid class. Please Try Again!");
    }
}
