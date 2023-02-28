const app = require("./app");
const port = 3000;
const {sequelize} = require('../models')

app.listen(port, async () => {
  console.log(`Server is running on port:${port}`);
  await sequelize.authenticate()
  console.log('Database Connected')
  
});
