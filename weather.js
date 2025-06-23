let Searchbox=document.getElementById("searchbox");
let Weatherbtn=document.getElementById("weatherbtn");
let City=document.getElementById("cityname")
let Temp=document.getElementById("temp")
let bt=document.getElementById("t");
let Wind=document.getElementById("wind");
let Humidity=document.getElementById("humidity");
let Des=document.getElementById("des");
let promise1=new Promise(function(resolve,reject){
  
     let success=true;

     if(success){
        resolve("Task completed");
     }
     else{

        reject("Task failed");
     }



})

promise1.then((msg)=>{


    console.log(MessageChannel,"by then")
}).catch((err)=>{
    console.log(err,"by catch")
})




  

  const Readspeech=()=>{
    let readvalue=Searchbox.value;
  console.log(readvalue);

    let text=new SpeechSynthesisUtterance(readvalue);
    window.speechSynthesis.speak(text);
    
  }


  bt.addEventListener('click',Readspeech);

  
Weatherbtn.addEventListener('click',()=>{


  let Weathervalue=Searchbox.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Weathervalue}&appid=id&units=metric`).then((response)=>{
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    return response.json();
     

}).then((data)=>{
    console.log(data);
    City.innerText=data.name;
    Temp.innerText=data.main.temp;
    Wind.innerHTML= "wind speed:"+data.wind.speed+"m/s";
    Humidity.innerHTML="Humidity:"+data.main.humidity+"%";
    Des.innerHTML=data.weather[0].description;
  }).catch((err)=>{
    console.log(err);
  });

})



