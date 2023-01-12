async function getMyData() {
  const response = await fetch(
    "https://run.mocky.io/v3/3b1dafba-5c50-4cc7-bdfb-b35866470465"
  );

  const json = await response.json();

  console.log("Backend Data: ", json);

  document.write(`<h1>${json.firstName}</h1>`);
  document.write(`<h1>${json.lastName}</h1>`);
  document.write(`<h1>${json.job}</h1>`);
}

getMyData();
