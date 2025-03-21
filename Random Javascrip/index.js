let wordArray = [
    'อ่อนแอก็แพ้ไป คนไหวเขาจะยืน', 'เป็นผู้หญิงสตรอง ผู้ชายไม่มองต้องเดินชน', 'เป็นคนอื่นเป็นได้ไม่นาน เป็นตัวเองเป็นได้ตลอดไป', 'คนอะไรสวยไม่รู้จักพัก น่ารักไม่รู้จักพอ', 'ชอบกินน้ำเป็นขวด หรือชอบน้ำที่กรวดไปให้คะ', 'โตมาถึงได้รู้ว่าชินจังไม่ใช่การ์ตูน แต่เป็นความรู้สึก',
    'ลองไม่พยายามตามหาความรักดูสิ เดี๋ยวสักวันความรักจะตามหาเราเอง', 'อยู่ ๆ ก็โสด แต่เส้นผ่านศูนย์กลางโลกก็ 12,742.02 กิโลเมตร เท่าเดิม อื้ม..ไม่เห็นมันจะมีผลอะไรต่อโลกของเราเลย', 'โดนเทแล้วไง เติมใหม่เดี๋ยวก็เต็ม', 'โลกนี้ไม่มีที่ยืนสำหรับคนอ่อนแอ งั้นไม่เป็นไรเรานั่งก็ได้ เราเก่ง',
    'กลับไปมอง อย่าย้อนกลับไปเดิน', 'ไม่อยากมีใครให้ใจพัง', 'ความสวยไม่คงที่ แอปที่ว่าดีเลยต้องโหลดมาใช้', 'สวยอย่างมีสไตล์ เพื่อผู้ชายมีสตางค์', 'อย่าเรียกว่าขึ้นคาน ให้เรียกว่าผู้เชี่ยวชาญในการเลือกแฟน'
];

let randomButton = document.getElementById('Random');
let output = document.getElementById('Output');
let stopButton = document.getElementById('Stop');

let timeoutId = 0;

randomButton.addEventListener('click', () => {
    timeoutId = setInterval(() => {
        let w = wordArray.length;
        let index = Math.floor(Math.random() * w);
        let word = wordArray[index];
        output.innerHTML = word;
    }, 200); 
});

stopButton.addEventListener(('click'), () =>{
    clearInterval(timeoutId);
});