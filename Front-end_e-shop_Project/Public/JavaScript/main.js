var cloth = [];

function populateStorage(i) {
  localStorage.setItem('font', i);
}

/*
var myJSON = {
    "Cart": [
            {"fig":"Photo_2.png",
             "price":77.30,
             "title":"Vero Moda Curve leather",
             "code":502332,
             "text":"And it’s not all about the bottom half, with blouses,blazers and dresses on offer in our Vero Moda at ASOS edit"},
            {"fig":"Photo_3.png",
             "price":27.90,
             "title":"ASOS Dark Future",
             "code":402332,
             "text":"Fresh on the streetwear scene, London-based label ASOS Dark Future brings a hint of minimalism"},
            {"fig":"Photo_4.png",
             "price":33.90,
             "title":"Plus faux leather",
             "code":302332,
             "text":"Smooth faux leather. Matte finish. Body: 67% Viscose, 28% Nylon, 5% Elastane."},
            {"fig":"Photo_5.png",
             "price":129.00,
             "title":"Other Stories organic cotton",
             "code":202332,
             "text":"Soft corduroy. Made with organic cotton. Grown using less water and no pesticides."},
            {"fig":"Photo_6.png",
              "price":37.99,
              "title":"Nike Dark Future oversized",
              "code":102332,
              "text":"Hoodie in cut and sew block stripe with embroidery in blue."},
            {"fig":"Photo_7.png",
              "price":31.99,
              "title":"ASOS DF co-ord",
              "code":802332,
              "text":"We are a proud member of The Better Cotton Initiative. Better Cotton is sourced via a system of Mass Balance."},
            {"fig":"Photo_8.png",
              "price":64.00,
              "title":"River Island tapered jean",
              "code":902332,
              "text":"Scroll fresh loungewear and everyday jeans and T-shirts, or suit up in sharp tailoring, from smart shirts and shoes to suit jackets and trousers – just name the occasion."},
            {"fig":"Photo_9.png",
               "price":24.99,
               "title":"Classic rigid jeans",
               "code":1102332,
               "text":"The inseam on these jeans measures 71cm. They’re a little shorter than normal. This sweet style is available in extended sizing!"},
            ]
}


function displayCards() {
var container = document.getElementsByClassName("container my-4")[1];
var elm = document.createElement("div");
elm.className = "row";
container.append(elm);

for( let i=0;i <=9; i++)
{
var el = document.createElement("div");

var fig = myJSON.Cart[i].fig;
var price = myJSON.Cart[i].price;
var title = myJSON.Cart[i].title;
var text = myJSON.Cart[i].text;

el.className = "col-sm-4";
el.innerHTML = "<img id='imgl' src='../Photos/"+fig+"'class='rounded' alt="+fig+" width=100% >"
             + "<div class='card-body'>"
             + "<h4 class='card-title'>"+title+"</h4>"
             + "<h4 class='card-subtitle mb-2 text-muted'>Price: " +price+ "&euro;</h4>"
             + "<p class='card-text'>"+text+"</p>"
             + "<a href='marketplace.html' class='btn btn-primary' onclick='populateStorage("+i+")'>Order</a>"
             + "</div>"
elm.append(el);
}
}
*/

function displayCardsTest() {
var container = document.getElementsByClassName("container my-4 Test")[0];
var elm = document.createElement("div");
elm.className = "row";
container.append(elm);

for( let i=0;i <=cloth.length; i++){

if (cloth[i].promo == 1) {

console.log(cloth[i].promo);
var el = document.createElement("div");
var fig = cloth[i].clink;
var price = cloth[i].price;
var title = cloth[i].name;
var text = cloth[i].mshortdescription;

el.className = "col-sm-4";
el.innerHTML = "<img id='imgl' src='"+fig+"'class='rounded' alt="+fig+" width=100% >"
             + "<div class='card-body'>"
             + "<h4 class='card-title'>"+title+"</h4>"
             + "<h4 class='card-subtitle mb-2 text-muted'>Price: " +price+ "&euro;</h4>"
             + "<p class='card-text'>"+text+"</p>"
             + "<a href='marketplace.html' class='btn btn-primary' onclick='populateStorage("+i+")'>Order</a>"
             + "</div>"
elm.append(el);
  }
 }
}

function loadFromServerCloth() {
  var req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/cloth");
  req.onload = function () {
    if (req.status == 200) {
      cloth = JSON.parse(req.response);
      displayCardsTest();

    } else {
      cloth = [];
      displayCardsTest();
      console.error("Problem loading cloth: " + req.status);
    }
  };
  req.send();
}

//displayCards();
//displayCardsTest();
