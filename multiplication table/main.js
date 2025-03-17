function inputData() {

    let InputNumber = document.getElementById("inputNumber").value

    checkNull(InputNumber)
    
    let number = Number(InputNumber)
    let outputHtml = document.getElementById("output")

    if(number === 0){
        outputHtml.innerHTML = " "
        return
    }

    for(let i = 1; i <= 12; i++){
        outputHtml.innerHTML += number + " x " + i + " = " + (number * i) + "<br>"
    }

}

function checkNull(InputNumber){

    if (InputNumber == "" || InputNumber == 0 || InputNumber == null || InputNumber == undefined){
        document.getElementById("error-msg").innerHTML = "กรุณาใส่ตัวเลข"
        console.log("กรุณาใส่ตัวเลข")
    }
    else {
        document.getElementById("error-msg").innerHTML = ""
    }
}