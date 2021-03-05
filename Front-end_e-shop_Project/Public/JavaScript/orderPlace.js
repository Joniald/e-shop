var cloth = [];
var manufacturer = [];
var currentFont = localStorage.getItem('font');


function displayMarketCard() {

container = document.getElementsByClassName("row my-4 p-5")[0];
var i = currentFont;
var fig = cloth[i].clink;
var price = cloth[i].price;
var title = cloth[i].name;
var text = cloth[i].mshortdescription;
var code = cloth[i].code;

var el = document.createElement("div");
el.className = "col-md-6";
el.innerHTML = "<img id='imgl' src='"+fig+"' class='rounded' alt="+fig+" width=100% >"
container.append(el);

var ele = document.createElement("div");
ele.className = "col-md-6";
ele.innerHTML = "<div class='card-body'>"
              + "<h4 class='card-title' id = 'nameOrderPut'>"+title+"</h4>"
              + "<hr>"
              + "<h4 class='card-subtitle mb-2 text-muted'>Price: <span class='text-danger'>" +price+ "&euro;</span></h4>"
              + "<br>"
              + "<h4 class='card-subtitle mb-2 text-muted'>Code: <span class='text-dark' id='inputClothCode'>" +code+ "</span></h4>"
              + "<hr>"
              + "<p class='card-text'>"+text+"</p>"
              + "<hr>"
              + "<div class='row g-3 align-items-center'>"
              + "<div class='col-auto'>"
              + "<label for='inputQuantity' class='col-form-label'>Quantity:</label>"
              + "</div>"
              + "<div class='col-auto'>"
              + "<input id='inputQuantity' class='form-control' aria-describedby='passwordHelpInline'>"
              + "</div>"
              + "</div>"
              + "<br>"
              + "<div class='row g-3 align-items-center'>"
              + "<div class='col-auto'>"
              + "<label for='inputCode' class='col-form-label'>Customer code:</label>"
              + "</div>"
              + "<div class='col-auto'>"
              + "<input id='inputCode' class='form-control' aria-describedby='passwordHelpInline'>"
              + "</div>"
              + "</div>"
              + "<br>"
              + "<button type='button' class='btn btn-primary' data-toggle='modal' onclick='postOrder()' data-target='#myModal_01'>Shop</button>"
container.append(ele);
}

function loadFromServerCloth() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/cloth");
  req.onload = function () {
    if (req.status == 200) {
      cloth = JSON.parse(req.response);
      displayMarketCard();

    } else {
      cloth = [];
      displayMarketCard();
      console.error("Problem loading cloth: " + req.status);
    }
  };
  req.send();
}

function displayManufacturerCard() {

container = document.getElementById("manufacturer");
var i = currentFont;
for ( let j=0; j <= manufacturer.length; j++){

if (cloth[i].name == manufacturer[j].name) {

var figManuf_01 = manufacturer[j].mlink01;
var figManuf_02 = manufacturer[j].mlink02;
var title = manufacturer[j].name;
var textManuf = manufacturer[j].mdescription;



var el = document.createElement("div");
el.className = "col-md-6";
el.innerHTML = "<img id='imgl' src='"+figManuf_01+"' class='rounded' alt="+figManuf_01+" width=100% >"
container.append(el);

var eldiv = document.createElement("div");
eldiv.className = "col-md-6";
eldiv.innerHTML = "<img id='imgl' src='"+figManuf_02+"' class='rounded' alt="+figManuf_02+" width=100% >"
container.append(eldiv);

var ele = document.createElement("div");
ele.className = "card-body col-sm-12";
ele.innerHTML = "<h4 class='card-title text-white'>"+title+"</h4>"
              + "<p class='card-text text-white'>"+textManuf+"</p>"
container.append(ele);
  }
 }
}

function loadFromServerManufacturer() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/manufacturer");
  req.onload = function () {
    if (req.status == 200) {
      manufacturer = JSON.parse(req.response);
      displayManufacturerCard();
    } else {
      manufacturer = [];
      displayManufacturerCard();
      console.error("Problem loading manufacturer: " + req.status);
    }
  };
  req.send();
}

function postOrder() {
  var d = new Date();
  var req = new XMLHttpRequest();
  req.open("POST", "http://127.0.0.1:3000/order", true);
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.onload = () => {
    console.log("Data sent to the server");
    //loadFromServerManufacturer();
  }
  console.log("Sending data to the server");
  req.send("orderdate=" + d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
  + "&cloth=" + document.getElementById("inputClothCode").innerHTML
  + "&quantity=" + document.getElementById("inputQuantity").value
  + "&customercode=" + document.getElementById("inputCode").value);
}

//displayMarketCard();
//displayManufacturerCard();
