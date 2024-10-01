const API_URL = 'https://animal-api-two.vercel.app/';

const $content = document.querySelector('div.content');
let imgElements = [];

async function getAnimal(name) {
  let res = await fetch(`${API_URL}${name}`);

  try {
    if (res) {
      let data = await res.json();

      data.photos.forEach((elem) => {
        imgElements += `<img src=${elem.url} alt=${elem.name} />`;
      });

      $content.innerHTML = imgElements;
    }
  } catch (error) {
    console.log(error);
  }
}

getAnimal('penguin');
