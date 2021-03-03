var order = [];

var bodyTest = document.getElementById("orderTableBody");
var x = bodyTest.value;

function displayOrder() {
  var body = document.getElementById("orderTableBody");
  body.innerHTML = ""; // remove previous rows

  for (let i = 0; i < order.length; i++) {
    var row = document.createElement("tr");

    var cell = document.createElement("td");
    cell.innerHTML = order[i].id;
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.innerHTML = order[i].orderdate;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = order[i].cloth;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = order[i].quantity;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = order[i].customercode;
    row.appendChild(cell);

    cell = document.createElement("td")
    cell.innerHTML ="<td>"
                   +"<button type='button' onclick='displayOrderUpdate("+ i +")' data-toggle='modal' data-target='#myModalUp_03' class='btn btn-light'>"
                   +"<i class='material-icons' data-toggle='tooltip' title='Edit' style='font-size:20px;color:green'>"
                   +"&#xE254;"+"</i>"
                   +"</button>"
                   +"<button type='button' onclick='displayOrderDelete("+ i +")' data-toggle='modal' data-target='#myModalDeleteOrder' class='btn btn-dark'>"
                   +"<span class='glyphicon glyphicon-refresh'>"
                   +"</span>"
                   +"<i class='material-icons' data-toggle='tooltip' title='Delete' style='font-size:20px;color:red'>"
                   +"&#xE872;"+"</i>"
                   +"</button>"
                   +"</td>";
    row.appendChild(cell);

    body.appendChild(row);
  }
}

function displayOrderDelete(i) {
  dVD =  document.getElementById("orderIdDelete");
  return dVD.value = order[i].id;
}

function displayOrderUpdate(i) {
  btn0 = document.getElementById("ordIdUp");
  btn1 = document.getElementById("ordOrderDateUp");
  btn2 = document.getElementById("ordClothCodeUp");
  btn3 = document.getElementById("ordQuantityUp");
  btn4 = document.getElementById("ordCustomerCodeUp");
  return [btn0.value = order[i].id, btn1.value = order[i].orderdate, btn2.value = order[i].cloth,
          btn3.value = order[i].quantity, btn4.value = order[i].customercode];
}

function loadFromServerOrder() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/order");
  req.onload = function () {
    if (req.status == 200) {
      order = JSON.parse(req.response);
      displayOrder();
    } else {
      order = [];
      displayOrder();
      console.error("Problem loading order: " + req.status);
    }
  };
  req.send();
}

function searchFromServerOrder() {
  var name = document.getElementById("inputSearchOrder").value;
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/order/search" + "?" + "name=" + name, true);
  req.onload = function () {
    if (req.status == 200) {
      order = JSON.parse(req.response);
      displayOrder();
    } else {
      order = [];
      displayOrder();
      console.error("Problem loading manufacturer : " + req.status);
    }
  };
  req.send();
}

function postOrder() {
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/order", true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    loadFromServerOrder();
  }
  console.log("Sending data to the server");
  req.send("orderdate=" + document.getElementById("ordOrderDate").value
  + "&cloth=" + document.getElementById("ordClothCode").value
  + "&quantity=" + document.getElementById("ordQuantity").value
  + "&customercode=" + document.getElementById("ordCustomerCode").value);
}

function UpdateOrder() {
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/order/PUT", true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    loadFromServerOrder();
  }
  console.log("Sendinf data to the server");
  req.send("id=" + document.getElementById("ordIdUp").value
    + "&orderdate=" + document.getElementById("ordOrderDateUp").value
    + "&cloth=" + document.getElementById("ordClothCodeUp").value
    + "&quantity=" + document.getElementById("ordQuantityUp").value
    + "&customercode=" + document.getElementById("ordCustomerCodeUp").value);
}

function deleteOrder() {
  var delete_id = document.getElementById("orderIdDelete").value;
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/order/" + delete_id, true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    loadFromServerOrder();
  }
  req.send();
}
