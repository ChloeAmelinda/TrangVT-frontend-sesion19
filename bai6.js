alert("cho phuong trinh ax^2+bx+c=0")
let a = +prompt("Nhap so a:")
let b = +prompt("Nhap so b:")
let c = +prompt("Nhap so c:")
if (a == 0) {
    alert("phuong trinh bac 1")
    let x = -(c / b)
    alert(`ket qua la: ${x}`)
} else if (a != 0) {
    let denta = b ** 2 - 4 * a * c
    if (denta < 0) {
        alert("phuong trinh vo nghiem")
    } else {
        let x1 = (-b + Math.sqrt(denta)) / 2 * a
        let x2 = (-b - Math.sqrt(denta)) / 2 * a
        if (x1 != x2) {
            alert(`phuong trinh co hai nghiem phan biet ${x1} va ${x2}`)
        } else if (x1 == x2) {
            alert(`phuong trinh co 1 nghiem ${x1}`)
        }
    }

}