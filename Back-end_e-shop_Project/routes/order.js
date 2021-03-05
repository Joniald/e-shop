const express = require('express')
const router = express.Router()
const { Pool, Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'deliverables',
    password: '****',
    port: 5432,
})

client.connect()

///////////////////////////////////PUT//////////////////////////////////////////

router.post("/PUT", (req, resp) => {
  var RESPO = req.body.id;
  console.log("Has been update the "+RESPO+" ID");
  //console.log("In /attendee POST");
    const myQuery = {
        text: "UPDATE orderproduct SET orderdate =$2, cloth =$3, quantity =$4, customercode = $5 WHERE id = $1",
        values: [req.body.id, req.body.orderdate, req.body.cloth, req.body.quantity, req.body.customercode]
    }
    client
    .query(myQuery)
    .then((resuits) => {
      console.log("Success!");
      resp.writeHead(200, {
                  "Content-Type": "api/json",
                  "Access-Control-Allow-Origin": "*",
      });
      resp.write(JSON.stringify(resuits.rows));
      resp.end();
    })
    .catch((error) => {
      console.log("Ooops!");
      console.log(error);
          resp.send("An error....")
    });
})

//////////////////////////////DELETE////////////////////////////////////////////

router.post("/:id", (req, resp) => {
  var RESPO = req.params.id;
  console.log("Has been delete the "+RESPO+" ID");
  //console.log("In /attendee POST");
  const myQuery = {
        text: "DELETE FROM orderproduct WHERE id = $1",
        values: [req.params.id]
    }
    client
    .query(myQuery)
    .then((resuits) => {
      console.log("Success!");
      resp.writeHead(200, {
                  "Content-Type": "api/json",
                  "Access-Control-Allow-Origin": "*",
      });
      resp.write(JSON.stringify(resuits.rows));
      resp.end();
    })
    .catch((error) => {
      console.log("Ooops!");
      console.log(error);
          resp.send("An error....")
    });
})

//////////////////////////////POST/////////////////////////////////////////////

router.post("/", (req, resp) => {
    console.log("Success!");
    const myQuery = {
          text: "INSERT INTO orderproduct (orderdate, cloth, quantity, customercode) VALUES ($1, $2, $3, $4)",
          values: [req.body.orderdate, req.body.cloth, req.body.quantity, req.body.customercode]
    }
    client
    .query(myQuery)
    .then((resuits) => {
      console.log("Success!");
      resp.writeHead(200, {
                  "Content-Type": "api/json",
                  "Access-Control-Allow-Origin": "*",
      });
      resp.write(JSON.stringify(resuits.rows));
      resp.end();
    })
    .catch((error) => {
      console.log("Ooops!");
      console.log(error);
          resp.send("An error....")
    });
})

/////////////////////////////////GET///////////////////////////////////////////

router.get("/", (req, resp) => {
    console.log("Success!");
    const myQuery = {
        text: "SELECT * FROM orderproduct"
                    }
    client
    .query(myQuery)
    .then((resuits) => {
      resp.writeHead(200, {
                  "Content-Type": "api/json",
                  "Access-Control-Allow-Origin": "*",
      });
      resp.write(JSON.stringify(resuits.rows));
      resp.end();

    })
    .catch((error) => {
      console.log("Ooops!");
      console.log(error);
          resp.send("An error....")
    });
})

////////////////////SEARCH/////////////////////////////////////////////////////

router.get("/search", (req, resp) => {

    const myQuery = {
          text: "SELECT * FROM orderproduct WHERE orderdate LIKE $1 OR cloth LIKE $1 OR customercode LIKE $1",
          values: ["%"+req.query.name+"%"]

      }
    client
    .query(myQuery)
    .then((resuits) => {
      console.log("Success!");
      resp.writeHead(200, {
                  "Content-Type": "api/json",
                  "Access-Control-Allow-Origin": "*",
      });
      resp.write(JSON.stringify(resuits.rows));
      resp.end();


    })
    .catch((error) => {
      console.log("Ooops!");
      console.log(error);
          resp.send("An error....")
    });
})


module.exports = router;
