const express = require('express')
const router = express.Router()
const { Pool, Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'deliverables',
    password: '*********',
    port: 5432,
})

client.connect()

///////////////////////////////////PUT//////////////////////////////////////////

router.post("/PUT", (req, resp) => {
  var RESPO = req.body.id;
  console.log("Has been update the "+RESPO+" ID");
  //console.log("In /attendee POST");
    const myQuery = {
        text: "UPDATE cloth SET code = $2, clink=$3, mshortdescription=$4, description = $5, promo = $6, price = $7, name = $8 WHERE id = $1",
        values: [req.body.id, req.body.code, req.body.clink, req.body.mshortdescription, req.body.description, req.body.promo, req.body.price, req.body.name]

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
        text: "DELETE FROM cloth WHERE id = $1",
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
          text: "INSERT INTO cloth (code, clink, mshortdescription, description, promo, price, name) VALUES ($1, $2, $3, $4, $5, $6, $7)",
          values: [req.body.code, req.body.clink, req.body.mshortdescription, req.body.description, req.body.promo, req.body.price, req.body.name]
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
        text: "SELECT * FROM cloth"
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
          text: "SELECT * FROM cloth WHERE UPPER(clink) LIKE UPPER($1) OR UPPER(mshortdescription) LIKE UPPER($1) OR UPPER(description) LIKE UPPER($1) OR UPPER(name) LIKE UPPER($1)",
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
