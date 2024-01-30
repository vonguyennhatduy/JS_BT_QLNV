function NhanVien(taiKhoan,hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam){

    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = 0;

    this.tinhTongLuong = function (){
        var tongLuong  = 0;
        var chucVu = this.chucVu;
        
        if(chucVu === "Sếp"){
            tongLuong = this.luongCB * 3;
        }else if(chucVu === "Trưởng phòng"){
            tongLuong = this.luongCB * 2;
        }else if(chucVu === "Nhân viên"){
            tongLuong = this.luongCB;
        }

        this.tongLuong = tongLuong;

        return tongLuong;
    }

    this.xepLoaiNV = function (){
        var xepLoai = "";
        if(this.gioLam >= 192){
            xepLoai = "Nhân viên Xuất Sắc";
        }else if(this.gioLam >= 176){
            xepLoai = "Nhân viên Giỏi";
        }else if(this.gioLam >= 160){
            xepLoai = "Nhân viên Khá";
        }else xepLoai = "Nhân viên Trung Bình";

        this.xepLoai = xepLoai;

        return xepLoai;
    }


}