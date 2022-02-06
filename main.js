console.log("it's working")

async function dogphoto() {
    let photoresult = await fetch("https://dog.ceo/api/breeds/image/random");
    let photo = await photoresult.json();
    document.getElementById("imageRandom").src = `${photo.message}`;

}

dogphoto()