const API_URL = 'https://animal-api-two.vercel.app/';

export async function getAnimals(name) {
  try {
    let res = await fetch(name ? `${API_URL}${name}` : API_URL);
    if (res) {
      let data = await res.json();
      return data.photos;
    }
  } catch (err) {
    console.log(err);
  }
}
