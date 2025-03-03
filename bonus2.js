let money = +prompt("nhap so tien:")
let request = prompt("co 2 lua chon: 1.rut tien /2.Nap tien")
if( request==="1" || request.toLowerCase()==="rut tien" || request.toLowerCase() ==="rut"){
    let ruttien=prompt("Nhap so tien muon rut:")
    if(ruttien> money || ruttien<=0){
        alert("ko hop le")
    }else{
        let du=money - ruttien
        alert("So tien con lai la:"+""+du)
    }
}else if( request==="2" || request.toLowerCase()==="nap tien" || request.toLowerCase() ==="nap"){
    let naptien=+prompt("Nhap so tien muon nap:")
    if(naptien< 0){
        alert("ko hop le")
    }else{
        let them=money + naptien
        alert("So tien con lai la:"+""+them)
    }
}

// let money = +prompt("Nhập số tiền hiện có:");
// let request = prompt("Có 2 lựa chọn: 1. Rút tiền / 2. Nạp tiền");

// if (request === "1" || request.toLowerCase() === "rút tiền" || request.toLowerCase() === "rút") {
//     let ruttien = +prompt("Nhập số tiền muốn rút:");
//     if (isNaN(ruttien) || ruttien <= 0) {
//         alert("Số tiền rút không hợp lệ!");
//     } else if (ruttien > money) {
//         alert("Số tiền rút vượt quá số dư hiện có!");
//     } else {
//         money -= ruttien;
//         alert("Rút tiền thành công! Số tiền còn lại là: " + money);
//     }
// } else if (request === "2" || request.toLowerCase() === "nạp tiền" || request.toLowerCase() === "nạp") {
//     let naptien = +prompt("Nhập số tiền muốn nạp:");
//     if (isNaN(naptien) || naptien <= 0) {
//         alert("Số tiền nạp không hợp lệ!");
//     } else {
//         money += naptien;
//         alert("Nạp tiền thành công! Số tiền hiện có là: " + money);
//     }
// } else {
//     alert("Lựa chọn không hợp lệ!");
// }