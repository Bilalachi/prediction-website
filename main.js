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
    predict_Gender(input.value)
  });

  async function predict_Gender() {
    let gender_result = await fetch ("https://api.genderize.io/?name=" + input.value);
    let str1 = await gender_result.json()
    result1.innerHTML = str1.gender
}