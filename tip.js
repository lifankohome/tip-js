/**
 * Created by lifanko on 2017/6/8.
 * 先在html中创建div，附带id为“tip”
 * tip("提示文本", "10%", "1", 1000)
 * 参数：提示文本，距顶部高度，层级，持续时长，位置（false为左侧，true为右侧）
 */
function tip(String, height, zIndex, time, position) {
    var len = String.length + 4;
    var obj = document.getElementById("tip");
    obj.style.textAlign = "center";
    obj.style.position = "fixed";
    obj.style.top = height;
    obj.style.zIndex = zIndex;
    if (position) {
        obj.style.left = "";
        obj.style.right = "0";
        obj.innerHTML = "<span id='span' style='background-color: #3458b0;display: inline-block;padding: 10px 30px;border-bottom-left-radius: 19px;border-top-left-radius: 19px;transition: all 0.5s 0s'>" + String + "</span>";
    } else {
        obj.style.right = "";
        obj.style.left = "0";
        obj.innerHTML = "<span id='span' style='background-color: #3458b0;display: inline-block;padding: 10px 30px;border-bottom-right-radius: 19px;border-top-right-radius: 19px;transition: all 0.5s 0s'>" + String + "</span>";
    }
    var span = document.getElementById("span");
    if (position) {
        span.style.marginRight = "-" + len + "pc";
    } else {
        span.style.marginLeft = "-" + len + "pc";
    }
    var time1 = setInterval(function () {
        if (position) {
            span.style.marginRight = "0";
        } else {
            span.style.marginLeft = "0";
        }
        clearInterval(time1);
    }, 10);
    var time2 = setInterval(function () {
        if (position) {
            span.style.marginRight = "-" + len + "pc";
        } else {
            span.style.marginLeft = "-" + len + "pc";
        }
        clearInterval(time2);
    }, 10 + time);
}