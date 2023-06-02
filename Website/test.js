var i = 0;
      function move(element_id, max_length) {
        if (i == 0) {
          i = 1;
          var elem = document.getElementById(element_id);
          var width = 0;
          var id = setInterval(frame, 10);
          function frame() {
            if (width >= max_length) {
              clearInterval(id);
              i = 0;
              //show('test');
              if(element_id == 'myBar'){
                Ajax_request();
              }
              
            } else {
              //if(width == 1){hide('test');}
              if(element_id == 'myBar'){
                width++;
              }else{
                width += 2;
              }
              
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
        document.getElementById('tempofPynq').innerHTML = WeatherData[0].temp;
        
        move('myDataBar', WeatherData[0].temp*2);
       }