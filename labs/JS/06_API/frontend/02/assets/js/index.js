const tbody = document.querySelector("tbody");

let addMode = false;
let editMode = false;

function populateTable() {
  tbody.innerHTML = ``;

  addMode = false;
  editMode = false;

  fetch("http://localhost:3004/products")
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      for (let index = 0; index < responseJSON.length; index++) {
        const productRecord = responseJSON[index];

        const tableRow = document.createElement("tr");

        tableRow.innerHTML = `<td>${productRecord.name}</td>
      <td>${productRecord.description}</td>
      <td>${productRecord.quantity}</td>
      <td>
      <input type="hidden" name="product-id" value="${productRecord.id}"/>
        <i class="fa fa-pencil" aria-hidden="true" onclick="modifyProduct(event)"></i>&nbsp;&nbsp;&nbsp;
        <i class="fa fa-trash" aria-hidden="true" onclick="deleteProduct(event)"></i>
      </td>`;

        tbody.append(tableRow);
      }
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

populateTable();

function addNew() {
  if (addMode) {
    return;
  }

  addMode = true;

  const tableRow = document.createElement("tr");

  tableRow.innerHTML = `<td><input type='text' name="product-name" maxlength="20"/></td>
  <td><input type='text' name="product-desc"  maxlength="50"/></td>
  <td><input type='number' name="product-qty" /></td>
  <td>
  <i class="fa-solid fa-floppy-disk" onclick='add(event)'></i>
  </td>`;

  tbody.append(tableRow);
}

function add(event) {
  const tr = event.target.parentElement.parentElement;

  const nameInput = tr.querySelector("input[name=product-name]").value;
  const descInput = tr.querySelector("input[name=product-desc]").value;
  const qtyInput = tr.querySelector("input[name=product-qty]").value;

  if (nameInput === "") {
    alert("Please provide product name");

    return;
  }

  if (descInput === "") {
    alert("Please provide product description");

    return;
  }

  if (qtyInput === "") {
    alert("Please provide product quantity");

    return;
  }

  const productJson = {
    name: nameInput,
    description: descInput,
    quantity: qtyInput,
  };

  fetch("http://localhost:3004/products", {
    method: "post",
    body: JSON.stringify(productJson),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      //Do nothing
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

  populateTable();
}

function deleteProduct(event) {
  const promptValue = confirm("Are you sure to delete this record?");

  if (promptValue === false) {
    return;
  }

  const td = event.target.parentElement;

  const productId = td.querySelector("input[name=product-id]").value;

  fetch(`http://localhost:3004/products/${productId}`, {
    method: "delete",
  })
    .then(() => {})
    .catch((error) => {
      console.log("Error: ", error);
    });

  populateTable();
}

function modifyProduct(event) {
  if (editMode) {
    return;
  }

  editMode = true;

  const td = event.target.parentElement;
  const tr = td.parentElement;

  const productId = td.querySelector("input[name=product-id]").value;

  const cells = tr.getElementsByTagName("td"); //dom collection

  cells[0].innerHTML = `<input type='text' name="product-name" maxlength="20" value="${cells[0].innerText}"/>`;
  cells[1].innerHTML = `<input type='text' name="product-desc"  maxlength="50"  value="${cells[1].innerText}"/>`;
  cells[2].innerHTML = `<input type='number' name="product-qty"  value="${cells[2].innerText}"/>`;

  cells[3].innerHTML = `<i class="fa-solid fa-floppy-disk" onclick='modify(event,${productId})'></i>`;
}

function modify(event, productId) {
  const tr = event.target.parentElement.parentElement;

  const nameInput = tr.querySelector("input[name=product-name]").value;
  const descInput = tr.querySelector("input[name=product-desc]").value;
  const qtyInput = tr.querySelector("input[name=product-qty]").value;

  if (nameInput === "") {
    alert("Please provide product name");

    return;
  }

  if (descInput === "") {
    alert("Please provide product description");

    return;
  }

  if (qtyInput === "") {
    alert("Please provide product quantity");

    return;
  }

  const productJson = {
    name: nameInput,
    description: descInput,
    quantity: qtyInput,
  };

  fetch(`http://localhost:3004/products/${productId}`, {
    method: "PUT",
    body: JSON.stringify(productJson),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {})
    .catch((error) => {
      console.log("Error", error);
    });

  populateTable();
}
