function calc(){
    var first, second, third, fourth, fifth, sixth, result;
    first = Number(document.getElementById("first").value);
    second = Number(document.getElementById("second").value);
    third = Number(document.getElementById("third").value);
    fourth = Number(document.getElementById("fourth").value);
    fifth = Number(document.getElementById("fifth").value);
    sixth = Number(document.getElementById("sixth").value);
    n = Number(document.getElementById("overAll").value);
    over = n;
    result = (first+second+third+fourth+fifth+sixth)*100/over;
    if(result >= 80){
        document.getElementById("msg").style.color="green";
    }
    if(result < 80){
        document.getElementById("msg").style.color="rgba(255, 238, 5, 0.952)";
    }
    if(result <= 30){
        document.getElementById("msg").style.color="red";
    }
    write = document.getElementById("msg");
    write.innerText = "You scored "+ result+ "%";
}
function rel(){
    // console.log("Hi");
    window.location.reload(true);
}
