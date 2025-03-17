const acctBalanceLbl = document.getElementById("acctBalanceLbl")
const deposits = [];
const withdrawals = [];
let totalBalance = 25;
const userDeposit = document.getElementById("userDeposit")
const btnDeposit = document.getElementById("btnDeposit")
const userWithdraw = document.getElementById("userWithdraw")
const btnWithdraw = document.getElementById("btnWithdraw")

// Create our number formatter.
const formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
})

btnDeposit.addEventListener('click', () => {

    if (isNaN(userDeposit.value)) {
        alert("กรุณาใส่จำนวนเงินที่ต้องการฝาก")
        return userDeposit.value = " "
    } else {

        if (userDeposit.value < 10 || userDeposit.value > 10000) {
            alert("คุณสารมารถฝากเงินได้ตั้งแต่ 10 - 10000 บาท")
            return userDeposit.value = ""
        } else {
            deposits.push(Number(userDeposit.value))
            totalBalance += (Number(userDeposit.value))

            let totalBalnceFormatted = formatter.format(totalBalance)
            document.getElementById("acctBalanceLbl").innerHTML = totalBalnceFormatted

            console.log("฿ " + userDeposit.value)
            return userDeposit.value = " "
        }
    }
})

btnWithdraw.addEventListener('click', () => {
    if (isNaN(userWithdraw.value)) {
        alert("กรุณาใส่จำนวนเงินที่ต้องการถอน")
        return userWithdraw.value = ""
    } else {

        if (userWithdraw.value > totalBalance - 25) {
            alert("ยอดรวมของคุณไม่สามารถลดลงต่ำกว่า 25 บาท")
            return userWithdraw.value = " "

        } else {
            withdrawals.push(Number(userWithdraw.value))
            totalBalance -= (Number(userWithdraw.value))

            let totalBalanceFormatted = formatter.format(totalBalance)
            document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted

            console.log("฿ " + userWithdraw.value)
            return userWithdraw.value = " "
        }
            
    } 
})

let totalBalnceFormatted = formatter.format(totalBalance)
document.getElementById("acctBalanceLbl").innerHTML = totalBalnceFormatted