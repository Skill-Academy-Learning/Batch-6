const backendURL = "http://localhost:3004/products";

// GET Method for Reading (i.e., R of CRUD)
function readAllProducts() {
  fetch(backendURL, { method: "get" })
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      console.log(
        `Got ${responseJSON.length} records from backend using GET API call.`
      );
    })
    .catch((error) => {
      console.log("FETCH-GET: ", error.message);
    });
}

readAllProducts();

// POST Method for Creating (i.e., C of CRUD)
function createNewProduct() {
  fetch(backendURL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Product1",
      description: "Some desc of Product1",
      quantity: 10,
    }),
  })
    .then(() => {
      console.log(`Added new product`);
    })
    .catch((error) => {
      console.log("FETCH-POST: ", error.message);
    });
}

createNewProduct();

// PUT Method for Updating (i.e., U of CRUD)
function updateProduct() {
  const jsonObjectToUpdate = {
    name: "Product1_new",
    description: "Some desc of Product1_new",
    quantity: 11,
  };

  fetch(backendURL + "/102", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonObjectToUpdate),
  })
    .then(() => {
      console.log(`Updated product id 102`);
    })
    .catch((error) => {
      console.log("FETCH-PUT: ", error.message);
    });
}

updateProduct();

//DELETE Method for Deleting (i.e., D of DELETE)
function deleteProduct() {
  fetch(backendURL + "/102", {
    method: "delete",
  })
    .then(() => {
      console.log(`Deleted product 102`);
    })
    .catch((error) => {
      console.log("FETCH-DELETE: ", error.message);
    });
}

deleteProduct();
