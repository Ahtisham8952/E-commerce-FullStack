import dotenv from "dotenv";
import app from "./app.js"
dotenv.config({
    path:'./env'
});


import ConnectDB from "./db/index.js";


ConnectDB()
  .then(() => {
    // Start the server and listen on the specified port
    app.listen(process.env.PORT, () => {
      console.log(`SERVER IS RUNNING AT PORT: ${process.env.PORT}`);
    });

    // Define a route for '/'

 
  })
  .catch((err) => {
    console.log(err);
  });


