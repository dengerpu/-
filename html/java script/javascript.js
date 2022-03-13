        var pwd=prompt("请输入密码","");
        while(pwd!="123456")
        {
            pwd=prompt("密码错误,请输入密码","");
        }
        if(pwd=="123456")
            document.write("登陆成功");