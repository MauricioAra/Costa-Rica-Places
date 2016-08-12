# Costa Rica Places Api

It's an API that provides the information of the provinces, cantons and districts of Costa Rica. It was done with the purpose of facilitating the work of inserting data from developers.

### Developed with:

* Nodejs

* Expressjs

* Mongoose

* MongoDB

###Powered by:

* Heroku

## End points

### Get provinces

* Url

  http://costa-rica-places.herokuapp.com/api/provinces

* GET Request

* Header

  `{ "Content-Type": "application/x-www-form-urlencoded"}`

* Data

  `No data`

* Response
  `[
    {
      "_id":"5719c86bc80eb63da626fb4e",
      "idProvincia":1,
      "nombre":"San José"
    },
    {
      "_id":"571aff85fca0fd03db5aa767",
      "idProvincia":2,
      "nombre":"Alajuela"
    }
   ]`

### Get Districts

* Url

 http://costa-rica-places.herokuapp.com/api/districts

* GET Request

* Header

 `{ "Content-Type": "application/x-www-form-urlencoded"}`

* Data

 `No data`

* Response
 `[
   {
     "_id":"57843b8edcba0f3bf619007f",
     "idDistrito":1,
     "nombre":"Carmen",
     "Canton_idCanton":1
   },
   {
     "_id":"57843bbadcba0f3bf619009a",
     "idDistrito":2,
     "nombre":"Merced",
     "Canton_idCanton":1
   }
  ]`


### Get Cantons

* Url

 http://costa-rica-places.herokuapp.com/api/cantons

* GET Request

* Header

 `{ "Content-Type": "application/x-www-form-urlencoded"}`

* Data

 `No data`

* Response
 `[
   {
     "_id":"5779d8b5dcba0f46c490dcb4",
     "idCanton":1,
     "nombre":"San Jose",
     "Provincia_idProvincia":1
   },
   {
     "_id":"5779d8c1dcba0f46c490dcb7",
     "idCanton":2,
     "nombre":"Escazu",
     "Provincia_idProvincia":1
   }
  ]`

## Contributors

* Paula segura Araya (Git username: alienCaramel)

* Mauricio Araica Hernández (Git username: mauricioara)
