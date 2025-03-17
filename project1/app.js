let lotto_number = prompt("กรอกตัวเลขที่ต้องการ")
let random_number = Math.floor(Math.random() *100)

document.getElementById("result").innerHTML = lotto_number
document.getElementById("random").innerHTML = random_number
if(lotto_number == random_number) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัลเลขท้าย 2 ตัว"
}
else {
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่รางวัล :("
}

if(age == 12) {
    console
}