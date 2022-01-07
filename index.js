require('dotenv').config({
    path: './config/config.env',
  });

const app = require('./config/custom-express');



const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is on at http://${HOST}:${PORT}`));
