document.getElementById("demo3", "demo8").onclick = function () {


    // flip1();
    var x = document.getElementById("exampleInputNumber").value;
    var y = document.getElementById("exampleInputNumber1").value;

    var bmi = (x / Math.pow((y / 100), 2));
    document.getElementById("demo").innerHTML = bmi;

    var result = document.getElementById("demo");
    console.log(result)
    result.textContent = bmi;

    if (x == "" || y == "") {
        alert("Please Enter the Values!");

    }
    else {
        flip();
    }

    if (bmi < 18.5) {
        demo1 = "Underweight";
        result.style.color = "#ffc44d";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        demo1 = "Normal Weight";
        result.style.color = "#0be881";
    }

    else if (bmi >= 25 && bmi <= 29.9) {
        demo1 = "Overweight";
        result.style.color = "#ff884d";
    }

    //If BMI is >= 30
    else {
        demo1 = "Obese";
        result.style.color = "#ff5e57";
    }
    document.getElementById("demo1").innerHTML = demo1;
}

function flip() {
    document.getElementById("demo5").style.transform = "rotateY(180deg)";

}

