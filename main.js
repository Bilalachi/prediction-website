console.log("it's working")

// getting random dog pic
async function dogphoto() {
    let photoresult = await fetch("https://dog.ceo/api/breeds/image/random");
    let photo = await photoresult.json();
    document.getElementById("imageRandom").src = `${photo.message}`;

}

dogphoto()

let input = document.querySelector("input")
let button = document.getElementById("prediction-button");

//starting predictions and adding styles to results
button.addEventListener("click", function () {
    document.getElementById("predictions").style.borderColor = "black";
    document.getElementById("predictions").style.boxShadow = "3px 3px 3px 3px grey";
    predict_Gender(), predict_Nationality() ,predict_age()
  });

  //get gender
  async function predict_Gender() {
    let gender_result = await fetch ("https://api.genderize.io/?name=" + input.value);
    let str1 = await gender_result.json()
    result1.innerHTML = str1.gender
}

//get age
async function predict_age() {
    let age_result = await fetch ("https://api.agify.io/?name=" + input.value);
    let str3 = await age_result.json()
    result3.innerHTML = str3.age
    
}

//get Nationality
async function predict_Nationality() {
    let nationality_result = await fetch ("https://api.nationalize.io/?name="+ input.value);
    let str2 = await nationality_result.json()  
    let list = [];
    list = `${str2.country[0].country_id}, ${str2.country[1].country_id}, ${str2.country[2].country_id}`
    result2.innerHTML = list
}

//remove the results

document.getElementById("name").addEventListener("mouseenter", function() {
    document.getElementById("result1").innerHTML = ""
    document.getElementById("result2").innerHTML = ""
    document.getElementById("result3").innerHTML = ""
    document.getElementById("predictions").style.boxShadow ="0px 0px 0px 0px" 
})
