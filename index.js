const app = require("./app.js");    // importing app.js

require("dotenv").config() ;

const PORT = process.env.PORT || 4000 ;

//console.log(PORT);

//default route
app.get("/", (req, res) => {
  res.send(`<h1>  THIS IS HOMEPAGE </h1>`);
});

app.listen(PORT , () => {
    console.log(`Server is listining at ${PORT}`);
});
