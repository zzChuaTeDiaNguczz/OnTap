// 1. Hàm chuyển đổi hiển thị môn học ở giữa
function hienThi(id) {
  let danhsach = document.querySelectorAll(".noidung");
  danhsach.forEach(function (item) {
    item.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

// Mặc định vừa mở trang sẽ hiện môn HTML
hienThi('HTML');

// 2. Thuật toán dịch tiến 1 bước (Mã hóa)
function dichTien(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c >= 'A' && c < 'Z') res += String.fromCharCode(c.charCodeAt(0) + 1);
    else if (c == 'Z') res += 'A';
    else if (c >= 'a' && c < 'z') res += String.fromCharCode(c.charCodeAt(0) + 1);
    else if (c == 'z') res += 'a';
    else if (c >= '0' && c < '9') res += String.fromCharCode(c.charCodeAt(0) + 1);
    else if (c == '9') res += '0';
    else res += c;
  }
  return res;
}

// 3. Thuật toán dịch lùi 1 bước (Giải mã)
function dichLui(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c > 'A' && c <= 'Z') res += String.fromCharCode(c.charCodeAt(0) - 1);
    else if (c == 'A') res += 'Z';
    else if (c > 'a' && c <= 'z') res += String.fromCharCode(c.charCodeAt(0) - 1);
    else if (c == 'a') res += 'z';
    else if (c > '0' && c <= '9') res += String.fromCharCode(c.charCodeAt(0) - 1);
    else if (c == '0') res += '9';
    else res += c;
  }
  return res;
}

// 4. Sự kiện bấm nút Mã hóa (Trên -> Đẩy xuống Dưới)
function maHoa() {
  let val = document.getElementById("num1").value;
  if (val === "") {
    alert("Vui lòng nhập chuỗi!");
    return;
  }
  document.getElementById("ketqua").value = dichTien(val);
}

// 5. Sự kiện bấm nút Giải mã (Dưới -> Đẩy ngược lên Trên)
function giaiMa() {
  let val = document.getElementById("ketqua").value;
  if (val === "") {
    alert("Vui lòng nhập chuỗi đã mã hóa!");
    return;
  }
  document.getElementById("num1").value = dichLui(val);
}