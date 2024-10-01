const API_URL = 'https://animal-api-two.vercel.app/';

const $content = document.querySelector('div.content');
let imgElements = [];

async function getAnimal() {
  let res = await fetch(API_URL);

  try {
    if (res) {
      let data = await res.json();

      data.photos.map((elem) => {
        imgElements += `<img src=${elem.url} alt=${elem.name} />`;
      });

      $content.innerHTML = imgElements;
    }
  } catch (error) {
    console.log(error);
  }
}

getAnimal();
