const backendURL = "http://localhost:3004/products";

// GET Method for Reading (i.e., R of CRUD)
async function readAllProducts() {
  try {
    const response = await fetch(backendURL, { method: "get" });
    const responseJSON = await response.json();

    console.log(
      `Got ${responseJSON.length} records from backend using GET API call.`
    );
  } catch (error) {
    console.log("FETCH-GET: ", error.message);
  }
}

readAllProducts();

// POST Method for Creating (i.e., C of CRUD)
async function createNewProduct() {
  try {
    await fetch(backendURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Product1",
        description: "Some desc of Product1",
        quantity: 10,
      }),
    });

    console.log(`Added new product`);
  } catch (error) {
    console.log("FETCH-POST: ", error.message);
  }
}

createNewProduct();

// PUT Method for Updating (i.e., U of CRUD)
async function updateProduct() {
  const jsonObjectToUpdate = {
    name: "Product1_new",
    description: "Some desc of Product1_new",
    quantity: 11,
  };

  try {
    await fetch(backendURL + "/102", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonObjectToUpdate),
    });

    console.log(`Updated product id 102`);
  } catch (error) {
    console.log("FETCH-PUT: ", error.message);
  }
}

updateProduct();

//DELETE Method for Deleting (i.e., D of DELETE)
async function deleteProduct() {
  try {
    await fetch(backendURL + "/102", {
      method: "delete",
    });

    console.log(`Deleted product 102`);
  } catch (error) {
    console.log("FETCH-DELETE: ", error.message);
  }
}

deleteProduct();
