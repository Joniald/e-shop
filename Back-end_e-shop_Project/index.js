const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/order',require('./routes/order'))
app.use('/cloth',require('./routes/cloth'))
app.use('/manufacturer',require('./routes/manufacturer'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
