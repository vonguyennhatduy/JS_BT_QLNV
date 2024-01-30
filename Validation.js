function Validation (){

    this.kiemTraRong = function(value, Errorid, message){
        if(value === ''){
            getElement(Errorid).innerHTML = message;
            return false;
        }

        getElement(Errorid).innerHTML = '';
        return true;
    }

    this.kiemTraDoDai = function(value, Errorid, message, min, max){
        if(value.length < min || value.length > max){
            getElement(Errorid).innerHTML = message;
            return false;
        }

        getElement(Errorid).innerHTML = '';
        return true;
    }


    this.kiemTraPattern = function(value, Errorid, message, pattern){
        if(pattern.test(value)){
            getElement(Errorid).innerHTML = '';
            return true;
        }

        getElement(Errorid).innerHTML = message;
        return false;
    }

    this.kiemTraChucVu = function (selectID, message){
        var index = getElement(selectID).selectedIndex;

        if(!index){
            getElement('tbChucVu').innerHTML = message;
            return false;
        }

        getElement('tbChucVu').innerHTML = '';
        return true;
    }

    this.kiemTraMatKhau = function (password){
        // kiểm tra độ dài 
        if (password.length < 6 || password.length > 10) {
            getElement('tbMatKhau').innerHTML = "Độ dài mật khẩu không đúng yêu cầu";
            return false;
        }
    
        // kiểm tra mật khẩu có ít nhất 1 kí tự số
        var hasNumber = /\d/.test(password);
        if (!hasNumber) {
            getElement('tbMatKhau').innerHTML = "Mật khẩu phải có ít nhất 1 kí tự số";
            return false;
        }
        // ít nhất 1 kí tự in hoa
        var hasUpperCase = /[A-Z]/.test(password);
        if (!hasUpperCase) {
            getElement('tbMatKhau').innerHTML = "Mật khẩu phải có ít nhất 1 kí tự in hoa"
            return false;
        }
        // kí tự đặc biệt 
        var hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        if (!hasSpecialChar) {
            getElement('tbMatKhau').innerHTML = "Mật khẩu phải có ít nhất 1 kí tự đặc biệt"
            return false;
        }
        getElement('tbMatKhau').innerHTML = '';
        return true;
    }

    this.kiemTraValue = function(value, Errorid, message, min, max){
        if(value < min || value > max){
            getElement(Errorid).innerHTML = message;
            return false;
        }

        getElement(Errorid).innerHTML = '';
        return true;
    }

    this.kiemTraTaiKhoan = function (value , Errorid, message, DSNV){
        var index = -1;
        for(var i = 0; i < DSNV.length; i++){
            var nhanVien = DSNV[i];
            if(nhanVien.taiKhoan === value){
                index = i;
                break;
            }
        }
        if(index !== -1){
            getElement(Errorid).innerHTML = message;
            return false;
        }
        getElement(Errorid).innerHTML = '';
        return true;
        
    }
    
}