let month=+prompt("Nhap so thang:")
switch(month){
    case 4,6,9,11:
        alert("Thang co 30 ngay")
        break
    case 1,3,5,7,8,10,12:
        alert("Thang co 31 ngay")
        break
    case 2:
        alert("Thang co 29 haoc 28 ngay")
        break
    default:
        alert("Ko hop le")
    break
}