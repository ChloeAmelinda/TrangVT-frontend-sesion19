let number=+prompt("Nhap so bat ky:")
if(number % 3 ==0 && number%5==0){
    alert(number+"Chia het cho 3 vs 5")
}else if(number%3==0){
    alert(number+ "Chia het cho 3")
}else if(number%5==0){
    alert(number+"Chia het cho 5")
}else{
    alert("ko chia het cho 3 va 5")
}
