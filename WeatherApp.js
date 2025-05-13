let formEle = document.getElementById("myForm");
let inputEle = document.getElementById("loc");
let section2 = document.getElementById("section2")

function displayInfo(data)
{
    let resultsEle = document.getElementById("results");
    resultsEle.textContent = "Weather Results for "+inputEle.value;
    let backgroundEle = document.getElementById("background-2");

    if(parseInt(data.main.temp)-273 < 25)
    {
        backgroundEle.style.backgroundImage = 'linear-gradient(to bottom,#304C62,#033047)';
        let firstEle = document.getElementById("first");
        firstEle.style.color = "#e8f5f9";//rgb(218, 225, 227)
        
        let currEle = document.getElementById("currCond");
        currEle.style.color = "#dbf0f5";

        let box1Ele = document.getElementById("box-1");
        let box2Ele = document.getElementById("box-2");
        let box3Ele = document.getElementById("box-3");
        let box4Ele = document.getElementById("box-4");
        let box5Ele = document.getElementById("box-5");

        box1Ele.style.backgroundColor = "#192841";
        box2Ele.style.backgroundColor = "#192841";
        box3Ele.style.backgroundColor = "#192841";
        box4Ele.style.backgroundColor = "#192841";
        box5Ele.style.backgroundColor = "#192841";

        box1Ele.style.color = "white";
        box2Ele.style.color = "white";
        box3Ele.style.color = "white";
        box4Ele.style.color = "white";
        box5Ele.style.color = "white";

    }
    else{
        backgroundEle.style.backgroundImage = 'linear-gradient(to bottom,white,lightblue)';
    }
    
   let tempEle =document.getElementById("temp");
   let t=parseInt(data.main.temp)-273;
   tempEle.textContent = t+"";

   let imageEle = document.getElementById("image");
   let cond = data.weather[0].main;
   if(cond === "Clouds")
   {
    imageEle.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724756136/cloudy-removebg-preview_flgjgz.png";
   }
   else if(cond === "Rain" || cond ==="Drizzle")
   {
    imageEle.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724755198/png-transparent-weather-forecasting-computer-icons-symbol-weather-text-cloud-logo-thumbnail-removebg-preview_v5zevu.png";
   }
   else if(cond === "Haze")
   {
    imageEle.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1725691491/haze-removebg-preview_z91d9t.png";
   }
   else if(cond === "Snow")
   {
    imageEle.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724756243/png-transparent-weather-forecasting-computer-icons-symbol-weather-text-cloud-logo-thumbnail-removebg-preview_2_vprhfd.png";
   }
   else if(cond === "Sunny")
   {
    imageEle.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724756188/sunny-removebg-preview_fz8rkd.png";
   }
   else if(cond === "Thunderstorm")
   {
    imageEle.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724756173/strom-removebg-preview_qqkagh.png";
   }
   else if(cond === "Mist")
   {
    imageEle.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1725696194/Screenshot_2024-09-07_133129-removebg-preview_vcza31.png";
   }

   let highLow =document.getElementById("high-low");
   let max = (parseInt(data.main.temp_max)-273)+5;
   let min = (parseInt(data.main.temp_min)-273)-4;
   highLow.textContent = "High: "+max+" deg , Low: "+min+" deg";

   let condEle = document.getElementById("condition");
   condEle.textContent = data.weather[0].main;
   condEle.classList.add("text-right");

   let feelEle = document.getElementById("feel");
   let feels_like = parseInt(data.main.feels_like)-273;
   feelEle.textContent = "Feels like "+feels_like+" deg";
   feelEle.classList.add("text-right");

   //wind
   let windSpeed = document.getElementById("wind_speed");
   windSpeed.textContent = data.wind.speed+"";
   let windImage = document.getElementById("wind");
   let deg = data.wind.deg;
   let directEle = document.getElementById("direction");
   if(deg===0)
   {
    windImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724752405/Screenshot_2024-08-27_145623-removebg-preview_pzjwi4.png";
    directEle.textContent = "From north";
   }
   else if(deg>0 && deg<90)
   {
    windImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724752429/Screenshot_2024-08-27_145830-removebg-preview_x1bsrz.png";
    directEle.textContent = "From north-east";
   }
   else if(deg===90)
   {
    windImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724752457/Screenshot_2024-08-27_150005-removebg-preview_jwpf9h.png";
    directEle.textContent = "From east";
   }
   else if(deg>90 && deg<180)
   {
    windImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724752478/Screenshot_2024-08-27_150128-removebg-preview_wnnyyc.png";
    directEle.textContent = "From south-east";
   }
   else if(deg===180)
   {
    windImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724751474/Screenshot_2024-08-27_144753-removebg-preview_t8l6ze.png";
    directEle.textContent = "From south";
   }
   else if(deg>180 && deg<270)
   {
    windImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724752313/Screenshot_2024-08-27_145233-removebg-preview_hll5hm.png";
    directEle.textContent = "From south-west";
   }
   else if(deg===270)
   {
    windImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724752356/Screenshot_2024-08-27_145357-removebg-preview_ykz91k.png";
    directEle.textContent = "From west";
   }
   else 
   {
    windImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724752378/Screenshot_2024-08-27_145514-removebg-preview_exhdiq.png";
    directEle.textContent = "From north-west";
   }
   //humidity
   let humidity = document.getElementById("humdty");
   humidity.textContent = data.main.humidity+"%";
   let humImg = document.getElementById("humidity");
    if(data.main.humidity>=1 && data.main.humidity<=29)
    {
       humImg.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724502105/Screenshot_2024-08-24_170945-removebg-preview_1_uhxvt9.png";
    }
    else if(data.main.humidity>=30 && data.main.humidity<=39)
    {
        humImg.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724502211/Screenshot_2024-08-24_171601-removebg-preview_r4rbez.png";
    }
    else if(data.main.humidity>=40 && data.main.humidity<=49)
    {
        humImg.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724502285/Screenshot_2024-08-24_171626-removebg-preview_aixcyd.png";
    }
    else if(data.main.humidity>=50 && data.main.humidity<=59)
    {
        humImg.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724502349/Screenshot_2024-08-24_171744-removebg-preview_i07npc.png";
    }
    else if(data.main.humidity>=60 && data.main.humidity<=79)
    {
        humImg.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724502724/Screenshot_2024-08-24_171956-removebg-preview_kpnfvm.png";
    }
    else if(data.main.humidity>=80 && data.main.humidity<=89)
    {
        humImg.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724502796/Screenshot_2024-08-24_172226-removebg-preview_zvwlft.png";
    }
    else if(data.main.humidity>=90 && data.main.humidity<=99)
    {
        humImg.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724502868/Screenshot_2024-08-24_172454-removebg-preview_lekgkj.png";
    }
    else{
        humImg.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724502937/Screenshot_2024-08-24_173549-removebg-preview_i0kipt.png";
    }
    


   //pressure
   let pressureEle = document.getElementById("pres");
   let p=(0.02953 *parseInt(data.main.pressure)).toFixed(2);
   pressureEle.textContent = p;
   let presImage = document.getElementById("pressure");
   p = parseInt(p).toFixed(0);
   if(p>=0 && p<=15)
   {
     presImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724745855/Screenshot__37_-removebg-preview_as1wsv.png";
   }
   else if(p>=16 && p<=30)
   {
    presImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724746525/Screenshot_2024-08-27_134040-removebg-preview_q4tso1.png";
   }
   else if(p>=31 && p<=50)
   {
    presImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724746559/Screenshot_2024-08-27_134144-removebg-preview_eemvst.png";
   }
   else if(p>=51 && p<=80)
   {
    presImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724746586/Screenshot_2024-08-27_134229-removebg-preview_sm44rd.png";
   }
   else if(p>=81 && p<=100)
    {
    presImage.src = "https://res.cloudinary.com/dugs6k8rw/image/upload/v1724746610/Screenshot_2024-08-27_134251-removebg-preview_idayeq.png";
   }

   //sealevel
   let seaLevelEle = document.getElementById("sea_lvl");
   seaLevelEle.textContent = data.main.sea_level+"";

   //sunrise
   let sunriseEle = document.getElementById("sunrise");
   var sunrise_time = new Date(data.sys.sunrise * 1000);
   sunriseEle.textContent = sunrise_time.toLocaleTimeString();

   //sunset
   let sunsetEle = document.getElementById("sunset");
   var sunset_time = new Date(data.sys.sunset * 1000);
   sunsetEle.textContent = sunset_time.toLocaleTimeString();

}



formEle.addEventListener("submit",function(event)
{
    event.preventDefault();
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+inputEle.value+"&appid=adf975792d561ad1f3d4bb95f9fcf36a";

    let options = {
        "method": "GET"
    };
    
    fetch(url, options)
        .then(function(response) {
            return response.json();
        }) 
        .then(function(data) {
            displayInfo(data);
            console.log(data);
        })
        .catch(function(error) {
            console.error('Fetch error:', error);
        });
});
