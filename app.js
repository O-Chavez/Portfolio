// require('dotenv').config();

var express = require('express'),
    app = express();

app.set('view engine', 'ejs');

// app.use(express.static(__dirname + "/assets"));

app.use(express.static(__dirname + '/assets'));
// app.set('views', __dirname + '/assets/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render("index.html")
}) 





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});
