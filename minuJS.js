function LengthConverter(valNum) {
    document.getElementById("outputMeters").innerHTML=valNum/100;
    document.getElementById("outputKM").innerHTML=valNum/10000;
    document.getElementById("outputDC").innerHTML=valNum/10;
    document.getElementById("outputMI").innerHTML=valNum*10;
    document.getElementById("outputMIIL").innerHTML=valNum*0.00000621371192237333;
}
