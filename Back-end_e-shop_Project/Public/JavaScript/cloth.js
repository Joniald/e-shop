var cloth = [];

var bodyTest = document.getElementById("clothTableBody");
var x = bodyTest.value;

function displayCloth() {
  var body = document.getElementById("clothTableBody");
  body.innerHTML = ""; // remove previous rows

  for (let i = 0; i < cloth.length; i++) {
    var row = document.createElement("tr");

    var cell = document.createElement("td");
    cell.innerHTML = cloth[i].id;
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.innerHTML = cloth[i].code;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = cloth[i].clink;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = cloth[i].mshortdescription;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = cloth[i].description;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = cloth[i].promo;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = cloth[i].price;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = cloth[i].name;
    row.appendChild(cell);

    cell = document.createElement("td")
    cell.innerHTML ="<td>"
                   +"<button type='button' onclick='displayClothUpdate("+ i +")' data-toggle='modal' data-target='#myModalUp_02' class='btn btn-light'>"
                   +"<i class='material-icons' data-toggle='tooltip' title='Edit' style='font-size:20px;color:green'>"
                   +"&#xE254;"+"</i>"
                   +"</button>"
                   +"<button type='button' onclick='displayClothDelete("+ i +")' data-toggle='modal' data-target='#myModalDeleteCloth' class='btn btn-dark'>"
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

function displayClothDelete(i) {
  dVD =  document.getElementById("clothIdDelete");
  return dVD.value = cloth[i].id;
}

function displayClothUpdate(i) {
  btn0 = document.getElementById("clothIdUp");
  btn1 = document.getElementById("clothCodeUp");
  btn2 = document.getElementById("clothImageLinkUp");
  btn3 = document.getElementById("clothShortDescriptionUp");
  btn4 = document.getElementById("clothDescriptionUp");
  btn5 = document.getElementById("clothPromoUp");
  btn6 = document.getElementById("clothPriceUp");
  btn7 = document.getElementById("clothNameUp");
  return [btn0.value = cloth[i].id, btn1.value = cloth[i].code, btn2.value = cloth[i].clink,
          btn3.value = cloth[i].mshortdescription, btn4.value = cloth[i].description,
          btn5.value = cloth[i].promo, btn6.value = cloth[i].price, btn7.value = cloth[i].name];
}

function loadFromServerCloth() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/cloth");
  req.onload = function () {
    if (req.status == 200) {
      cloth = JSON.parse(req.response);
      displayCloth();
    } else {
      cloth = [];
      displayCloth();
      console.error("Problem loading cloth: " + req.status);
    }
  };
  req.send();
}

function searchFromServerCloth() {
  var name = document.getElementById("inputSearchCloth").value;
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/cloth/search" + "?" + "name=" + name, true);
  req.onload = function () {
    if (req.status == 200) {
      cloth = JSON.parse(req.response);
      displayCloth();
    } else {
      cloth = [];
      displayCloth();
      console.error("Problem loading manufacturer : " + req.status);
    }
  };
  req.send();
}

function postCloth() {
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/cloth", true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    loadFromServerCloth();
  }
  console.log("Sending data to the server");
  req.send("code=" + document.getElementById("clothCode").value
  + "&clink=" + document.getElementById("clothImageLink").value
  + "&mshortdescription=" + document.getElementById("clothShortDescription").value
  + "&description=" + document.getElementById("clothDescription").value
  + "&promo=" + document.getElementById("clothPromo").value
  + "&price=" + document.getElementById("clothPrice").value
  + "&name=" + document.getElementById("clothName").value);

  }

function UpdateCloth() {
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/cloth/PUT", true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    loadFromServerCloth();
  }
  console.log("Sendinf data to the server");
  req.send("id=" + document.getElementById("clothIdUp").value
    + "&code=" + document.getElementById("clothCodeUp").value
    + "&clink=" + document.getElementById("clothImageLinkUp").value
    + "&mshortdescription=" + document.getElementById("clothShortDescriptionUp").value
    + "&description=" + document.getElementById("clothDescriptionUp").value
    + "&promo=" + document.getElementById("clothPromoUp").value
    + "&price=" + document.getElementById("clothPriceUp").value
    + "&name=" + document.getElementById("clothNameUp").value);
}

function deleteCloth() {
  var delete_id = document.getElementById("clothIdDelete").value;
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/cloth/" + delete_id, true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    loadFromServerCloth();
  }
  req.send();
}
