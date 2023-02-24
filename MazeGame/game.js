document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        console.log(x,y);

        var elem1 = document.getElementsByClassName("boundary")[0];
        var rect1 = elem1.getBoundingClientRect();

        var elem2 = document.getElementsByClassName("boundary")[1];
        var rect2 = elem2.getBoundingClientRect();
        
        var elem3 = document.getElementsByClassName("boundary")[2];
        var rect3 = elem3.getBoundingClientRect();

        var elem4 = document.getElementsByClassName("boundary")[3];
        var rect4 = elem4.getBoundingClientRect();

        var elem5 = document.getElementsByClassName("boundary")[4];
        var rect5 = elem5.getBoundingClientRect();

        if (((x>rect1.left && x<rect1.right) && (y>rect1.top && y<rect1.bottom)) ||  ((x>rect2.left && x<rect2.right) && (y>rect2.top && y<rect2.bottom)) 
        || ((x>rect3.left && x<rect3.right) && (y>rect1.top && y<rect1.bottom)) 
        || ((x>rect4.left && x<rect4.right) && (y>rect4.top && y<rect4.bottom)) ||  ((x>rect5.left && x<rect5.right) && (y>rect5.top && y<rect5.bottom))){
            
            for (var j = 0; j < 5; j++) {
                document.getElementsByClassName("boundary")[j].style.backgroundColor = " #ff8888";
            }
        }

    });


    // start=document.getElementById("start");
    // start.addEventListener("mousemove", function(e){


    //     var x=e.clientX;
    //     var y=e.clientY;

    //     start.style.left+="px";
    //     start.style.top+="px";

    //     $('#element').position()
    // });
});

