let score = prompt("กรอกคะแนน : ")
if(score >= 80) {
    document.getElementById("scoreot").innerHTML = "คุณได้เกรด A"
}
else if(score >= 70) {
    document.getElementById("scoreot").innerHTML = "คุณได้เกรด B"
}
else if(score >= 60) {
    document.getElementById("scoreot").innerHTML = "คุณได้เกรด C"
}
else if(score >= 50) {
    document.getElementById("scoreot").innerHTML = "คุณได้เกรด D"
}
else {
    document.getElementById("scoreot").innerHTML = "คุณสอบตก"
}