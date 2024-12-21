export const getUzbekistan = new Promise((resolve, reject) => {
  try {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://restcountries.com/v3.1/name/uzbek");

    xhr.send();

    xhr.onload = () => {
      if (xhr.status == 200) {
        const data = xhr.responseText;
        return resolve(JSON.parse(data));
      } else {
        console.log("Error", xhr.status);
      }
    };
  } catch (error) {
    console.log("erororr");
    reject(error);
  }
});

export function getCountry(countryName = "uzbek") {
  return new Promise((resolve, reject) => {
    try {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);

      xhr.send();

      xhr.onload = () => {
        if (xhr.status == 200) {
          const data = xhr.responseText;
          return resolve(JSON.parse(data));
        } else {
          console.log("Error", xhr.status);
        }
      };
    } catch (error) {
      reject(error);
    }
  });
}

export async function getCountryWithAsync(countryName = "uzbek") {
  try {
    const country1 = await getCountry(countryName);
    console.log(`1-davlat: ${country1[0].name.official}`);

    const country2 = await getCountry(country1[0].borders[0]);
    console.log(`2-davlat: ${country2[0].name.official}`);

    const country3 = await getCountry(country2[0].borders[0]);
    console.log(`3-davlat: ${country3[0].name.official}`);

    const country4 = await getCountry(country3[0].borders[1]);
    console.log(`4-davlat: ${country4[0].name.official}`);
    return country4;
  } catch (error) {
    console.log("Error", error);
  }
}

export const getTodos = async function (id = "") {
  return new Promise((resolve, reject) => {
    try {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`);

      xhr.send();

      xhr.onload = () => {
        if (xhr.status == 200) {
          const data = JSON.parse(xhr.responseText);
          return resolve(data);
        }

        if (xhr.status === 404) {
          reject(new NotFoundException(`TODO-${id} not found`));
        }
      };
    } catch (error) {
      reject(error);
    }
  });
};