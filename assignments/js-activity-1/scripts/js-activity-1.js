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
];

let dataTable = "<tbody>";

for (let i = 0; i < customers.length; i++) {
  dataTable += "<tr>";
  dataTable += "<td>" + customers[i].customer_id + "</td>";
  dataTable += "<td>" + customers[i].last_purchase_quantity + "</td>";
  dataTable += "<td>" + customers[i].last_purchase_amount_in_dollars + "</td>";
  dataTable += "</tr>";
}
dataTable += "</tbody>";
console.log(dataTable);
document.getElementById("tableRow").innerHTML = dataTable;
const getIdButton = document.getElementById("get-id-button");

const getCustomerData = () => {
  let id = document.getElementById("customer-lookup").value;
  const customerId = parseInt(id);
  for (let i = 0; i < customers.length; i++) {
    if (customerId > 000 && customerId < 006) {
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
