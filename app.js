var express = require('express')
var app = express()

var PORT = process.env.PORT || 5000

app.set('view engine', 'jade')

app.use(express.logger())
app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(require('connect-assets')())
app.use(app.router)

app.get('/', function(request, response){
    response.render('index')
})

app.listen(PORT, function() {
    console.log("Ready to Hack")
})