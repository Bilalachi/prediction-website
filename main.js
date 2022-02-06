console.log("it's working")

async function dogphoto() {
    let photoresult = await fetch("https://dog.ceo/api/breeds/image/random");
    let photo = await photoresult.json();
    document.getElementById("imageRandom").src = `${photo.message}`;

}

dogphoto()

let input = document.querySelector("input")
let button = document.getElementById("prediction-button");

button.addEventListener("click", function () {
    predict_Gender(input.value), predict_Nationality()
  });

  async function predict_Gender() {
    let gender_result = await fetch ("https://api.genderize.io/?name=" + input.value);
    let str1 = await gender_result.json()
    result1.innerHTML = str1.gender
}

async function predict_Nationality() {
    let nationality_result = await fetch ("https://api.nationalize.io/?name="+ input.value);
    let str2 = await nationality_result.json()  
    let list = [];
    list = `${str2.country[0].country_id}, ${str2.country[1].country_id}, ${str2.country[2].country_id}`
    result2.innerHTML = list
}