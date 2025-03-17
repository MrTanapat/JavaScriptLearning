let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ")
var sum = 0

for(var i = 0; i < round; i++){
    var answer = prompt("head or till")
    var random_answer = " "

    if(Math.floor(Math.random ()*10) <= 4){
        //หัว
        random_answer = "head"
    } else{
        //ก้อย
        random_answer = "till"
    }
    //คำนวนและแสดงคำตอบ
    if(answer == random_answer){
        alert("คุณตอบถูก")
        sum = sum + 1
        document.getElementById("game-list").innerHTML += "คุณทายถูก" + " : " + answer + "<br>"
        document.getElementById("score").innerHTML = "คะแนนของคุณคือ : " + sum
    }
    else{
        alert("คุณตอบผิด")
        document.getElementById("game-list").innerHTML += "คุณทายผิด" + " : " + answer + "<br>"
    }

    console.log(random_answer + " : "+ answer)
    console.log("คะแนนของคุณคือ : " + sum)
}


