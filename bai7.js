let a=+prompt("Nhap so a")
let b=+prompt("Nhap so b:")
let c=+prompt("Nhap so c:")
let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
alert("So lon nhat la:" +max)
