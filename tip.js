/**
 * tip.js v0.2
 * Created by lifanko on 2017/6/8.
 * https://github.com/lifankohome/tip-js
 */
function tip(text, top, period, index, side) {
    var len = text.length + 4;
    var obj = document.getElementById("tip");
    obj.style.textAlign = "center";
    obj.style.position = "fixed";
    obj.style.top = top;
    obj.style.zIndex = arguments[3] ? arguments[3] : 0;
    var position = arguments[4] ? arguments[4] : false;
    if (position) {
        obj.style.left = "";
        obj.style.right = "0";
        obj.innerHTML = "<span id='span-tip-js' style='color: whitesmoke;background-color: #3458b0;display: inline-block;padding: 10px 30px;border-bottom-left-radius: 19px;border-top-left-radius: 19px;transition: all 0.5s 0s'>" + text + "</span>";
    } else {
        obj.style.right = "";
        obj.style.left = "0";
        obj.innerHTML = "<span id='span-tip-js' style='color: whitesmoke;background-color: #3458b0;display: inline-block;padding: 10px 30px;border-bottom-right-radius: 19px;border-top-right-radius: 19px;transition: all 0.5s 0s'>" + text + "</span>";
    }
    var span = document.getElementById("span-tip-js");
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
    }, 10 + period);
}