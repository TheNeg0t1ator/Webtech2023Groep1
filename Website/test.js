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
              show('test');
              Ajax_request();
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
    }
     function show(hide_id) {
        document.getElementById(hide_id).hidden = false
     }

     
     function Ajax_request(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "Data.json",true); // connectie met de server json file 
        xhr.onload = function () { // data inlade
          if (xhr.status == 200) {
            console.log("okay");
            var WeatherData = JSON.parse(xhr.responseText); //parse functie
            renderHTML_data(WeatherData); // data render functie 
          }
          else
          console.log("could not find file");
        }  
        xhr.send();    // request versturen
       }

       function renderHTML_data(WeatherData){
        console.log(WeatherData[0].temp);
        var elem = document.getElementById("myDataBar");
        elem.style.width = WeatherData[0].temp*2 + "%";

       }