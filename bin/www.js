require('dotenv').config()

const app = require('../src/app')

const port = process.env.PORT || 4848

app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`)
})
