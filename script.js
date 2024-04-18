const locality=document.querySelector("input");
const search=document.querySelector("button");
const container2=document.querySelector(".container2")
const container=document.querySelector(".container")
async function getdata(){

    const res=await fetch(`https://api.weatherapi.com/v1/current.json?key=85d94b95cec24bc1b29225346241104&q=${locality.value}`)
    const json= await res.json();
    console.log(json);
    container.innerHTML=
     
    `
    <h3>${json.location.country}</h3>
    <h3>${json.location.name}</h3>
    <img src=${json.current.condition.icon}></img>
    <h3>${json.current.condition.text}</h3>
    <h3> temp: ${json.current.temp_c}C</h3>
    <h3> humidity: ${json.current.humidity}</h3>
    `
    container2.innerHTML=`<h3>${json.location.localtime}</h3>
    <h3>feels like: ${json.current.feelslike_c}</h3>
    <h3>wind: ${json.current.wind_kph}</h3>`

}
search.addEventListener("click",getdata)