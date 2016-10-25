function uaredirect(f){try{if(document.getElementById("bdmark")!=null){return}var b=false;if(arguments[1]){var e=window.location.host;var a=window.location.href;if(isSubdomain(arguments[1],e)==1){f=f+"/#m/"+a;b=true}else{if(isSubdomain(arguments[1],e)==2){f=f+"/#m/"+a;b=true}else{f=a;b=false}}}else{b=true}if(b){var c=window.location.hash;if(!c.match("fromapp")){if((navigator.userAgent.match(/(iPhone|iPod|ipad|Android|ios|ipad air2|ipad air|ipad mini)/i))){location.replace(f)}}}}catch(d){}}function isSubdomain(c,d){this.getdomain=function(f){var e=f.indexOf("://");if(e>0){var h=f.substr(e+3)}else{var h=f}var g=/^www\./;if(g.test(h)){h=h.substr(4)}return h};if(c==d){return 1}else{var c=this.getdomain(c);var b=this.getdomain(d);if(c==b){return 1}else{c=c.replace(".","\\.");var a=new RegExp("\\."+c+"$");if(b.match(a)){return 2}else{return 0}}}};
 
    var bForcepc = fGetQuery("dv") == "pc";//PC端
    function fBrowserRedirect(){
        var sUserAgent = navigator.userAgent.toLowerCase();  
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";//ipad 
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";//iphone
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";//移动设备
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";//  
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";//<a href="https://www.baidu.com/s?wd=ucweb%E6%B5%8F%E8%A7%88%E5%99%A8&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1dBnjf1mhD1ry7WuhRzmH9b0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6K1TL0qnfK1TL0z5HD0IgF_5y9YIZ0lQzqlpA-bmyt8mh7GuZR8mvqVQL7dugPYpyq8Q1DLn1cznj03nHRLrHn1njT4rjT" target="_blank" class="baidu-highlight">ucweb浏览器</a>
        var bIsAndroid = sUserAgent.match(/android/i) == "android";//android
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  //windows ce<a href="https://www.baidu.com/s?wd=%E7%A7%BB%E5%8A%A8%E7%B3%BB%E7%BB%9F&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1dBnjf1mhD1ry7WuhRzmH9b0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6K1TL0qnfK1TL0z5HD0IgF_5y9YIZ0lQzqlpA-bmyt8mh7GuZR8mvqVQL7dugPYpyq8Q1DLn1cznj03nHRLrHn1njT4rjT" target="_blank" class="baidu-highlight">移动系统</a>
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";//windows mobile
        if(bIsIpad){
           var sUrl = location.href;      
           if(!bForcepc){
               window.location.href = "/wap";  
           }
        }
        if(bIsIphoneOs || bIsAndroid){  
            var sUrl = location.href;      
            if(!bForcepc){  
                window.location.href = "/wap"+window.location.pathname;  
            }
        }  
        if(bIsMidp||bIsUc7||bIsUc||bIsCE||bIsWM){
            var sUrl = location.href;      
            if(!bForcepc){  
                window.location.href = "/wap"+window.location.pathname;  
            }
        }
    }  
    function fGetQuery(name){//获取参数值  
        var sUrl = window.location.search.substr(1);  
        var r = sUrl.match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)"));  
        return (r == null ? null : (r[2]));  
    }  
    function fShowVerBlock(){     
        if(bForcepc){
            document.getElementByIdx_x("dv_block").style.display = "block";  
        }  
        else{  
            document.getElementByIdx_x("ad_block").style.display = "block";  
        }  
    }  
    fBrowserRedirect();  
