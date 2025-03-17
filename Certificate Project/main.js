function InputData() {

    let weightInput = document.getElementById("weight-input").value
    let heightInput = document.getElementById("hight-input").value
    let result = document.getElementById("result")

    checkNull(weightInput, heightInput)
    

    if (weightInput && heightInput) {
        let bmi = weightInput / ((heightInput / 100) ** 2)

        if (bmi < 18.5) {
            result.innerHTML = bmi.toFixed(2) + "<br> <br>" + " น้ำหนักน้อย "
        } 
        else if (bmi >= 18.5 && bmi < 22.90) {
            result.innerHTML = bmi.toFixed(2) + "<br> <br>" + " ปกติ "
        } 
        else if (bmi >= 22.90 && bmi < 24.90) {
            result.innerHTML = bmi.toFixed(2) + "<br> <br>" + " ท้วม "
        } 
        else if (bmi >= 24.90 && bmi < 29.90) {
            result.innerHTML = bmi.toFixed(2) + "<br> <br>" + " อ้วน "
        } 
        else{
            result.innerHTML = bmi.toFixed(2) + "<br> <br>" + " อ้วนมาก "
        }
    
    }


}


function checkNull(weightInput, heightInput) {

    let str_msg = ""

    if (weightInput == "" || weightInput == undefined || weightInput == null || weightInput == 0) {
        str_msg = str_msg + "กรุณากรอกน้ำหนัก" + '\n'
    }

    if (heightInput == "" || heightInput == undefined || heightInput == null || heightInput == 0) {
        str_msg = str_msg + "กรุณาส่วนสูง" + '\n'
    }

    if (str_msg != "") {
        alert(str_msg)
    }
}
