var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 8080;


app.use(express.static('./public'));


app.listen(PORT, ()=>{
  console.log("App running on ", PORT);
});