const customers = [
  {
    customer_id: "001",
    last_name: "Smith",
    first_name: "Jacob",
    last_purchase_quantity: 5,
    last_purchase_amount_in_dollars: 50,
  },
  {
    customer_id: "002",
    last_name: "Johnson",
    first_name: "Iris",
    last_purchase_quantity: 10,
    last_purchase_amount_in_dollars: 100,
  },
  {
    customer_id: "003",
    last_name: "Perez",
    first_name: "Javier",
    last_purchase_quantity: 5,
    last_purchase_amount_in_dollars: 50,
  },
  {
    customer_id: "004",
    last_name: "Thomas",
    first_name: "Henry",
    last_purchase_quantity: 20,
    last_purchase_amount_in_dollars: 200,
  },
  {
    customer_id: "005",
    last_name: "Smith",
    first_name: "Janice",
    last_purchase_quantity: 10,
    last_purchase_amount_in_dollars: 100,
  },
  {
    customer_id: "006",
    last_name: "von Briesen",
    first_name: "D.I.",
    last_purchase_quantity: 100,
    last_purchase_amount_in_dollars: 1000,
  },
];

/* Add new customer to customers array by storing the input data from the text fields for each property and then adding those values to a new customer object and then pushing that object to the customers array. Then call addTableRow() to rebuild the table with the new customer included. */
const addCustomer = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const id = document.getElementById("id").value;
  const lastPurchaseQuantity = document.getElementById(
    "lastPurchaseQuantity"
  ).value;
  const lastPurchaseInDollars = document.getElementById(
    "lastPurchaseInDollars"
  ).value;

  for (let i = 0; i < customers.length; i++) {
    if (id === customers[i].customer_id) {
      return (document.getElementById(
        "status"
      ).innerHTML = `Customer already exists with id: ${customers[i].customer_id}`);
    }
  }
  customers.push({
    customer_id: id,
    last_name: lastName,
    first_name: firstName,
    last_purchase_quantity: lastPurchaseQuantity,
    last_purchase_amount_in_dollars: lastPurchaseInDollars,
  });
  console.log(customers);
  addTableRow();
  document.getElementById("status").innerHTML = "New customer has been added.";
};

/* To create a new row for the new customer added to the customers array. Regenerate the whole Customer table with the new ojects included. This is done by creating a table row element and looping through each customer object and pulling the data from each customer and concatenating it to the table row being created. */
let generateTableRow = () => {
  let dataTable = "<tbody>";
  for (let i = 0; i < customers.length; i++) {
    dataTable += "<tr>";
    dataTable += "<td>" + customers[i].customer_id + "</td>";
    dataTable += "<td>" + customers[i].last_purchase_quantity + "</td>";
    dataTable +=
      "<td>" + customers[i].last_purchase_amount_in_dollars + "</td>";
    dataTable += "</tr>";
  }
  dataTable += "</tbody>";
  document.getElementById("tableRow").innerHTML = dataTable;
  const getIdButton = document.getElementById("get-id-button");
};

generateTableRow();

const getCustomerData = () => {
  let id = document.getElementById("customer-lookup").value;
  const customerId = parseInt(id);
  for (let i = 0; i < customers.length; i++) {
    if (
      customerId > 000 &&
      customerId <= customers[customers.length - 1].customer_id
    ) {
      if (customerId === parseInt(customers[i].customer_id)) {
        document.getElementById(
          "customer-lookup-results"
        ).innerHTML = `The customer with id #${customers[
          i
        ].customer_id.toString()} is ${customers[i].first_name} ${
          customers[i].last_name
        }, whose last purchase was ${
          customers[i].last_purchase_quantity
        } Dynamic Monkey backpacks in the amount of $${
          customers[i].last_purchase_amount_in_dollars
        }.`;
      }
    } else {
      document.getElementById(
        "customer-lookup-results"
      ).innerHTML = `Customer id: #${id} doesn't exist. Enter a valid customer id.`;
    }
  }
};

const resetTextField = () => {
  let id = document.getElementById("customer-lookup");
  id.value = "";
  document.getElementById("customer-lookup-results").innerHTML = "";
};

const addTableRow = () => {
  let dataTable = "<tbody>";
  for (let i = 0; i < customers.length; i++) {
    dataTable += "<tr>";
    dataTable += "<td>" + customers[i].customer_id + "</td>";
    dataTable += "<td>" + customers[i].last_purchase_quantity + "</td>";
    dataTable +=
      "<td>" + customers[i].last_purchase_amount_in_dollars + "</td>";
    dataTable += "</tr>";
  }
  dataTable += "</tbody>";
  document.getElementById("tableRow").innerHTML = dataTable;
  const getIdButton = document.getElementById("get-id-button");
};
