function redirector(){
    yourClass = Number(document.getElementById("class").value);
    
    if (yourClass == 0){
        alert("Inavlid Class!");
        return false;
    }
    if (yourClass >= 13){
        alert("You have entered an invalid class.");
        return false;
    }
    if (yourClass < 6){
        window.location.href = "https://ak-sudo.github.io/prcntcalc/c1to5.html";
    }
    if (yourClass >= 6){
        window.location.href = "https://ak-sudo.github.io/prcntcalc/calc.html";
    }

}
