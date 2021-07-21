function redirector(){
    yourClass = Number(document.getElementById("class").value);
    if (yourClass < 6){
        window.location.href = "/prcntcalc/c1to5.html"
    }
    if (yourClass >= 6){
        window.location.href = "/prcntcalc/calc.html";
    }
    if (yourClass >= 13){
        alert("You have entered an invalid class. Please Try Again!");
        return false;
    }
}
