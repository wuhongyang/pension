/**
 * Created by Administrator on 2015/3/29.
 */
(function(){
    $(document).ready(function(){
        $("#jigou").click(function(){    //$("button").mouseover(function(){
            $('#bgImg').css("background-image","url(webpub/resource/10030/Image/zkxbx/login.png)");
        });

        $("#jiashu").click(function(){
            $('#bgImg').css("background-image","url(webpub/resource/10030/Image/zkxbx/login1.png)");
        });
        $("#login").click(function(){    //$("button").mouseover(function(){
            var name = $("#userName").val(),pass=$("#userPassword").val();
            if(name==""||pass==""){
                alert("用户名或密码不能为空");
                return false;
            }else if(name!="admin"||pass!="123"){
                alert("用户名或密码不正确");
                return false;
            }else{
                localStorage.setItem("user",{name:name,pass:pass});
                window.location.href="pages/platform/home.html"
            }
        });

        $("#register").click(function(){
            //
        });


    });
})(jQuery)
