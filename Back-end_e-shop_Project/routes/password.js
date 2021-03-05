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

/////////////////////GET/////////////////////////////////////////////

router.get("/", (req, resp) => {
    console.log("Success! " + req.query.email, req.query.password);
    const myQuery = {
        text: "SELECT * FROM users WHERE email = $1 AND password = crypt($2,password)",
        values: [req.query.email, req.query.password]
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


module.exports = router;