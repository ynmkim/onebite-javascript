const API_URL = 'https://trip-wiki-api.vercel.app/';

export async function getCities(startIdx, region, sortBy, searchWord) {
  try {
    let url = `${API_URL}`;

    if (region && region !== 'All') {
      url += `${region}?start=${startIdx}`;
    } else {
      url += `?start=${startIdx}`;
    }
    if (sortBy) {
      url += `&sort=${sortBy}`;
    }
    if (searchWord) {
      url += `&search=${searchWord}`;
    }

    const res = await fetch(url);
    if (res) {
      const data = await res.json();
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getCityDetail(cityId) {
  try {
    const res = await fetch(`${API_URL}city/${cityId}`);
    if (res) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}
