// khởi tạo đối tượng danh sách nhân viên
var dsnv = new DSNV();
var validation = new Validation();


// hàm dom tới thẻ by id
function getElement (id){
    return document.getElementById(id);
}

// lấy thông tin từ UI

function layThongTinNV(isAdd){
    // isAdd = true => thêm nhân viên 
    // isAdd = false => cập nhật nhân viên 
    
    var taiKhoan = getElement('tknv').value;
    var hoTen = getElement('name').value;
    var email = getElement('email').value;
    var matKhau = getElement('password').value;
    var ngayLam = getElement('datepicker').value;
    var luongCB = getElement('luongCB').value * 1;
    var chucVu = getElement('chucvu').value;
    var gioLam = getElement('gioLam').value * 1;

    var isValid = true;

    if(isAdd){
        // kiểm tra tài khoản 
        isValid &= validation.kiemTraRong(taiKhoan,'tbTKNV', "Vui lòng không để trống") 
        && validation.kiemTraDoDai(taiKhoan, 'tbTKNV', "Tài khoản phải có độ dài từ 4-6 ký số",4,6) 
        && validation.kiemTraPattern(taiKhoan,'tbTKNV', "Tài khoản phải là chuỗi các ký số",/^[0-9]+$/)
        && validation.kiemTraTaiKhoan(taiKhoan,'tbTKNV', "Tài khoản đã tồn tại",dsnv.listNV);

        // kiểm tra họ tên 
        isValid &= validation.kiemTraRong(hoTen,'tbTen',"Vui lòng không để trống") 
        && validation.kiemTraPattern(hoTen,'tbTen',"Tên nhân viên phải là chữ", /^[a-zA-Z\s]+$/);

        // kiểm tra email
        isValid &= validation.kiemTraRong(email,'tbEmail', "Vui lòng không để trống")
        && validation.kiemTraPattern(email,'tbEmail',"Vui lòng nhập email đúng định dạng",/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

        // kiểm tra mật khẩu
        isValid &= validation.kiemTraRong(matKhau, 'tbMatKhau', "Vui lòng không để trống")
        && validation.kiemTraMatKhau(matKhau);

        // kiểm tra ngày làm 
        isValid &= validation.kiemTraRong(ngayLam, 'tbNgay', "Vui lòng không để trống")
        && validation.kiemTraPattern(ngayLam, 'tbNgay', "Ngày tháng không đúng định dạng",/^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/(19|20)\d{2}$/);

        // kiểm tra lương cơ bản 
        isValid &= validation.kiemTraRong(luongCB,'tbLuongCB',"Vui lòng không để trống")
        && validation.kiemTraValue(luongCB,'tbLuongCB',"Lương cơ bản phải từ 1-20 triệu đồng",1000000,20000000);

        // kiểm tra chức vụ 
        isValid &= validation.kiemTraChucVu('chucvu',"Vui lòng chọn chức vụ phù hợp");

        // kiểm tra giờ làm

        isValid &= validation.kiemTraRong(gioLam, 'tbGiolam', "Vui lòng không để trống")
        && validation.kiemTraValue(gioLam,'tbGiolam',"Giờ làm trong tháng từ 80-200 giờ",80,200);
    }else {
        // kiểm tra tài khoản 
        isValid &= validation.kiemTraRong(taiKhoan,'tbTKNV', "Vui lòng không để trống") 
        && validation.kiemTraDoDai(taiKhoan, 'tbTKNV', "Tài khoản phải có độ dài từ 4-6 ký số",4,6) 
        && validation.kiemTraPattern(taiKhoan,'tbTKNV', "Tài khoản phải là chuỗi các ký số",/^[0-9]+$/);

        // kiểm tra họ tên 
        isValid &= validation.kiemTraRong(hoTen,'tbTen',"Vui lòng không để trống") 
        && validation.kiemTraPattern(hoTen,'tbTen',"Tên nhân viên phải là chữ", /^[a-zA-Z\s]+$/);

        // kiểm tra email
        isValid &= validation.kiemTraRong(email,'tbEmail', "Vui lòng không để trống")
        && validation.kiemTraPattern(email,'tbEmail',"Vui lòng nhập email đúng định dạng",/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

        // kiểm tra mật khẩu
        isValid &= validation.kiemTraRong(matKhau, 'tbMatKhau', "Vui lòng không để trống")
        && validation.kiemTraMatKhau(matKhau);

        // kiểm tra ngày làm 
        isValid &= validation.kiemTraRong(ngayLam, 'tbNgay', "Vui lòng không để trống")
        && validation.kiemTraPattern(ngayLam, 'tbNgay', "Ngày tháng không đúng định dạng",/^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/(19|20)\d{2}$/);

        // kiểm tra lương cơ bản 
        isValid &= validation.kiemTraRong(luongCB,'tbLuongCB',"Vui lòng không để trống")
        && validation.kiemTraValue(luongCB,'tbLuongCB',"Lương cơ bản phải từ 1-20 triệu đồng",1000000,20000000);

        // kiểm tra chức vụ 
        isValid &= validation.kiemTraChucVu('chucvu',"Vui lòng chọn chức vụ phù hợp");

        // kiểm tra giờ làm

        isValid &= validation.kiemTraRong(gioLam, 'tbGiolam', "Vui lòng không để trống")
        && validation.kiemTraValue(gioLam,'tbGiolam',"Giờ làm trong tháng từ 80-200 giờ",80,200);
    }

    if(!isValid){
        return null;
    }

    var nhanVien = new NhanVien(
        taiKhoan,
        hoTen,
        email,
        matKhau,
        ngayLam,
        luongCB,
        chucVu,
        gioLam
    )
    nhanVien.tinhTongLuong();
    nhanVien.xepLoaiNV();
    console.log('nhân viên: ' , nhanVien);

    return nhanVien;
}

function renderDSNV (arr = dsnv.listNV){
    var ans = '';
    for(var i = 0; i < arr.length; i++){
        var nhanVien = arr[i];
        ans += `
            <tr>
                <td>${nhanVien.taiKhoan}</td>
                <td>${nhanVien.hoTen}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <td>${nhanVien.xepLoai}</td>
                <td>
                    <button class="btn btn-success px-4" data-toggle="modal" data-target="#myModal" onclick="updateNV('${nhanVien.taiKhoan}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteNV('${nhanVien.taiKhoan}')">Delete</button>
                </td>
            </tr>
        `
    }
    console.log('ans', ans);
    getElement('tableDanhSach').innerHTML = ans;
}

// hiển thịn danh sách nhân viên ra UI 
getElement('btnThemNV').onclick = function (){
    var nhanVien = layThongTinNV(true);

    if(nhanVien){
        console.log(nhanVien);

        dsnv.themNV(nhanVien);  
        renderDSNV();

        setLocalStorage();
        // resetForesetFormrm();
    }
}

// xóa nhân viên 

function deleteNV(taiKhoan){
    dsnv.xoaNV(taiKhoan);
    console.log('danh sách: ', dsnv);
    renderDSNV();
    setLocalStorage();
}

// cập nhật nhân viên 
function updateNV (taiKhoan){
    console.log('taikhoan: ', taiKhoan);

    var index = dsnv.timViTriNV(taiKhoan);

    console.log(index);

    // lấy thông tin nhân viên thứ index
    var nhanVien = dsnv.listNV[index];
    // hiển thị thông tin nhân viên cần cập nhật lên form
    getElement('tknv').value = nhanVien.taiKhoan;
    getElement('name').value = nhanVien.hoTen;
    getElement('email').value = nhanVien.email;
    getElement('password').value = nhanVien.matKhau;
    getElement('datepicker').value = nhanVien.ngayLam;
    getElement('luongCB').value = nhanVien.luongCB;
    getElement('chucvu').value = nhanVien.chucVu;
    getElement('gioLam').value = nhanVien.gioLam;
}

// cập nhật sinh viên 
getElement('btnCapNhat').onclick = function (){
    var newNV = layThongTinNV(false);
    dsnv.capNhatNV(newNV);
    renderDSNV();
    setLocalStorage();
}

// lưu vào local storage

function setLocalStorage(){
    // // chuyển tất cả giá trị cần lưu về string 
    // var dataString  = JSON.stringify(dsnv.listNV);
    // localStorage.setItem("DSNV", dataString);

    // // lấy giá trị đã lưu vào local storage

    // var data = localStorage.getItem("DSNV");
    // var parseData = JSON.parse(data);
    // // nếu key không tồn tại dưới local thì giá trị trẻ về là null
    // // cần kiểm tra có khác null hay không trước khi parse
    // console.log(parseData);

    // // xóa thông tin
    // localStorage.removeItem("DSNV");

    var dataString = JSON.stringify(dsnv.listNV);
    localStorage.setItem("DSNV",dataString);

}


function getLocalStorage(){
    var data = localStorage.getItem("DSNV");
    if(data != null){
        var dataparse = JSON.parse(data);
        console.log(dataparse);

        // hiển thị danh sách đã lưu ra UI 
        dsnv.listNV = dataparse;
        renderDSNV();
    }
}

getLocalStorage();

// tìm kiếm nhân viên theo loạin

getElement('searchName').onkeyup = function() {
    var searchName = getElement('searchName').value;

    console.log(searchName);

    var lowerSearchName = searchName.toLowerCase();

    var arraySearch = [];

    for(var i = 0; i < dsnv.listNV.length; i++){
        var nhanVien = dsnv.listNV[i];

        var nv = nhanVien.xepLoai.toLowerCase();

        if(nv.indexOf(lowerSearchName) !== -1){
            arraySearch.push(nhanVien);
        }
    }

    // hiện ra UI 
    // default parameter
    renderDSNV(arraySearch);
}