let age = prompt("กรุณากรอกอายุของคุณ")
if (age > 13) {
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Lm12sEDbNiM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}
else{
    alert("อายุของคุณไม่ถึง 13 ปี")
}