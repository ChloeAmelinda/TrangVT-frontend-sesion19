let money = +prompt("Mời bạn nhập số tiền thanh toán:");
let tax;

if (money < 500000) {
  tax = money * 0.05;
} else if (money < 1000000) {
  tax = money * 0.1;
} else {
  tax = money * 0.15;
}
tax = tax.toLocaleString("vi-VN");

console.log(`Tổng giá trị hóa đơn = ${tax} VNĐ`);
alert(`Tổng giá trị hóa đơn = ${tax} VNĐ`);
