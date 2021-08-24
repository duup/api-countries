let url = 'https://restcountries.eu/rest/v2/name/Malaysia';

function waitForData(response) {
  return response.json();
}

function handleData(data) {
  console.log(data);
}

fetch(url, { method: 'GET' }).then(waitForData).then(handleData);
