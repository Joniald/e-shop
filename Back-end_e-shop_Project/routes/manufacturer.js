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

//////////////////////////////////PUT///////////////////////////////////////////

router.post("/PUT", (req, resp) => {
  var RESPO = req.body.id;
  console.log("Has been update the "+RESPO+" ID");
  //console.log("In /attendee POST");
    const myQuery = {
        text: "UPDATE manufacturer SET name = $2, country=$3, mlink01=$4, mlink02=$5, mdescription = $6, mshortdescription = $7 WHERE id = $1",
        values: [req.body.id, req.body.name, req.body.country, req.body.mlink01, req.body.mlink02, req.body.mdescription, req.body.mshortdescription]
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
        text: "DELETE FROM manufacturer WHERE id = $1",
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
          text: "INSERT INTO manufacturer (name, country, mlink01, mlink02, mdescription, mshortdescription) VALUES ($1, $2, $3, $4, $5, $6)",
          values: [req.body.name, req.body.country, req.body.mlink01, req.body.mlink02, req.body.mdescription, req.body.mshortdescription]

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
        text: "SELECT * FROM manufacturer"
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

////////////////////SEARCH/////////////////////////////////////////////////////

router.get("/search", (req, resp) => {

    const myQuery = {
          text: "SELECT * FROM manufacturer WHERE UPPER(name) LIKE UPPER($1) OR UPPER(country) LIKE UPPER($1) OR UPPER(mlink01) LIKE UPPER($1) OR UPPER(mlink02) LIKE UPPER($1) OR UPPER(mdescription) LIKE UPPER($1) OR UPPER(mshortdescription) LIKE UPPER($1)",
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
