var i = 0;
      function move() {
        if (i == 0) {
          i = 1;
          var elem = document.getElementById("myBar");
          var width = 1;
          var id = setInterval(frame, 10);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
              show();
            } else {
                if(width == 1){hide('test');}

              width++;
              elem.style.width = width + "%";
            }
          }
        }
      }

      function hide(hide_id) {
        document.getElementById(hide_id).hidden = true
        console.log('got out of the function');
    }
     function show() {
        document.getElementById('test').hidden = false
     }