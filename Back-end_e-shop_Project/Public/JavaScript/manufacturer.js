var manufacturer = [];

var bodyTest = document.getElementById("manufacturerTableBody");
var x = bodyTest.value;

function displayOptionManufacturer() {

  var bodySel = document.getElementById("manName");
  bodySel.innerHTML = ""; // remove previous rows

  var manTable = [];
  for (let j = 0; j < manufacturer.length; j++) {
    manTable.push(manufacturer[j].name);
  }


  for (let i = 0; i < cloth.length; i++) {

    if (cloth[i].name != manTable[i] ) {
      console.log(i);
      var sel = document.createElement("option");
      sel.innerHTML = cloth[i].name;
      bodySel.add(sel);
   }

 }
}


function displayManufacturer() {
  var body = document.getElementById("manufacturerTableBody");
  body.innerHTML = ""; // remove previous rows

  for (let i = 0; i < manufacturer.length; i++) {
    var row = document.createElement("tr");

    var cell = document.createElement("td");
    cell.innerHTML = manufacturer[i].id;
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.innerHTML = manufacturer[i].name;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = manufacturer[i].country;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = manufacturer[i].mlink01;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = manufacturer[i].mlink02;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = manufacturer[i].mdescription;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = manufacturer[i].mshortdescription;
    row.appendChild(cell);

    cell = document.createElement("td")
    cell.innerHTML ="<td>"
                   +"<button type='button' onclick='displayManufacturerUpdate("+ i +")' data-toggle='modal' data-target='#myModalUp_01' class='btn btn-light'>"
                   +"<i class='material-icons' data-toggle='tooltip' title='Edit' style='font-size:20px;color:green'>"
                   +"&#xE254;"+"</i>"
                   +"</button>"
                   +"<button type='button' onclick='displayManufacturerDelete("+ i +")' data-toggle='modal' data-target='#myModalDeleteManufacturer' class='btn btn-dark'>"
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

function displayManufacturerDelete(i) {
  dVD =  document.getElementById("manufacturerIdDelete");
  return dVD.value = manufacturer[i].id;
}

function displayManufacturerUpdate(i) {
  btn00 = document.getElementById("manIdUp");
  btn0 = document.getElementById("manNameUp");
  btn1 = document.getElementById("manCountryUp");
  btn2 = document.getElementById("manFirstImageLinkUp");
  btn3 = document.getElementById("manSecondImageLinkUp");
  btn4 = document.getElementById("manDescriptionUp");
  btn5 = document.getElementById("manShortDescriptionUp");
  return [btn00.value = manufacturer[i].id,btn0.value = manufacturer[i].name, btn1.value = manufacturer[i].country,
          btn2.value = manufacturer[i].mlink01, btn3.value = manufacturer[i].mlink02,
          btn4.value = manufacturer[i].mdescription, btn5.value = manufacturer[i].mshortdescription];
}

function loadFromServerManufacturer() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/manufacturer");
  req.onload = function () {
    if (req.status == 200) {
      manufacturer = JSON.parse(req.response);
      displayManufacturer();
    } else {
      manufacturer = [];
      displayManufacturer();
      console.error("Problem loading manufacturer: " + req.status);
    }
  };
  req.send();
}

function searchFromServerManufacturer() {
  var name = document.getElementById("inputSearchManufacturer").value;
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/manufacturer/search" + "?" + "name=" + name, true);
  req.onload = function () {
    if (req.status == 200) {
      manufacturer = JSON.parse(req.response);
      displayManufacturer();
    } else {
      manufacturer = [];
      displayManufacturer();
      console.error("Problem loading manufacturer : " + req.status);
    }
  };
  req.send();
}

function postManufacturer() {
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/manufacturer", true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    loadFromServerManufacturer();
  }
  console.log("Sending data to the server");
  req.send("name=" + document.getElementById("manName").value
  + "&country=" + document.getElementById("manCountry").value
  + "&mlink01=" + document.getElementById("manFirstImageLink").value
  + "&mlink02=" + document.getElementById("manSecondImageLink").value
  + "&mdescription=" + document.getElementById("manDescription").value
  + "&mshortdescription=" + document.getElementById("manShortDescription").value);

  }

function UpdateManufacturer() {
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/manufacturer/PUT", true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    loadFromServerManufacturer();
  }
  console.log("Sendinf data to the server");
  req.send("id=" + document.getElementById("manIdUp").value
    + "&name=" + document.getElementById("manNameUp").value
    + "&country=" + document.getElementById("manCountryUp").value
    + "&mlink01=" + document.getElementById("manFirstImageLinkUp").value
    + "&mlink02=" + document.getElementById("manSecondImageLinkUp").value
    + "&mdescription=" + document.getElementById("manDescriptionUp").value
    + "&mshortdescription=" + document.getElementById("manShortDescriptionUp").value);
}

function deleteManufacturer() {
  var delete_id = document.getElementById("manufacturerIdDelete").value;
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/manufacturer/" + delete_id, true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    loadFromServerManufacturer();
  }
  req.send();
}
