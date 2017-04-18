$(function () {
    H_logon = {};
    H_logon.openLogon = function(){
        $('.logon-header a').click(function(){
            $('.logon').show();
            $('.logon-bg').show();
        });
    };
    H_logon.closeLogon = function(){
        $('.close-logon').click(function(){
            $('.logon').hide();
            $('.logon-bg').hide();
        });
    };
    H_logon.logonForm = function () {
        $("#logon-button-submit").on('click',function(){
              var username = $("#username");
              var usernameValue = $("#username").val();
              var password = $("#password");
              var passwordValue = $("#password").val();
            if(usernameValue == ""){
                alert("用户名不能为空");
                username.focus();
                return false;
            }else if(usernameValue.length > 15){
                alert("用户名长度不能大于15字符");
                username.focus();
                return false;
            }else if(passwordValue == ""){
                alert("密码不能为空");
                password.focus();
                return false;
            }else if(passwordValue.length < 6 || passwordValue.length > 30){
                alert("密码长度不能小于6或大于30位字符");
                password.focus();
                return false;
            }
			if(password2Value == ""){
                alert("密码不能为空");
                password2.focus();
                return false;
            }else if(password2Value.length < 6 || password2Value.length > 30){
                alert("密码长度不能小于6或大于30位字符");
                password2.focus();
                return false;
            }else{
                alert("登录成功");
                setTimeout(function(){
                    $('.logon').hide();
                    $('.logon-bg').hide();
                    $('.list-input').val('');
                },2000);
            }
        });
    };
    H_logon.run = function () {
        this.closeLogon();
        this.openLogon();
        this.logonForm();
    };
    H_logon.run();
});