const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      reload = require('reload'),
      cors = require('cors');

      var app = express();

      app.use(bodyParser.json())
      app.use(cors());

      let coin = require('./block/supercoin.js')

      app.get('/superCoin', coin.mine)
      reload(app);



      // app.get('/getcoin', coin)
      app.use(express.static('./public'))
            var port = 8085
        app.listen(port, function() {
          console.log("listining on port " + port)
        })
