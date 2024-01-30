function DSNV (){
    
    this.listNV = [];

    this.themNV = function (nhanVien){
        this.listNV.push(nhanVien);
    }

    this.timViTriNV = function (taiKhoan){
        var index = -1;
        for(var i = 0; i < this.listNV.length; i++){
            var nhanVien = this.listNV[i];
            if(nhanVien.taiKhoan === taiKhoan){
                index = i;
                break;
            }
        }

        return index;
    }

    this.xoaNV = function (taiKhoan){
        var index = this.timViTriNV(taiKhoan);

        if(index !== -1){
            // tồn tại nhân viên cần xóa 
            // splice dùng để xóa phần tử trong mảng 
            this.listNV.splice(index,1);
        }
    }

    this.capNhatNV = function (nhanVien) {
        var index = this.timViTriNV(nhanVien.taiKhoan);

        if(index !== -1)[
            dsnv.listNV[index] = nhanVien
        ]
    }

}