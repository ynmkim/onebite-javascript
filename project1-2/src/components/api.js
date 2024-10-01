const API_URL = 'https://animal-api-two.vercel.app/';

export async function getAnimals() {
  let res = await fetch(API_URL);

  try {
    if (res) {
      let data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
