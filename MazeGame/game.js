document.addEventListener("DOMContentLoaded", function (event) {

    start=document.getElementById("start");
    start.addEventListener("mousemove", function(e){


        var x=e.clientX;
        var y=e.clientY;

        start.style.left+="px";
        start.style.top+="px";

        $('#element').position()
});

