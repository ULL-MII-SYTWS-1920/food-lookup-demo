# La Base de Datos

Si la BBDD no está poblada:

Se puede recrear la BBDD ejecutando el programa ruby en `db/seed/seed-sqlite.rb`
que tira del fichero `raw-ndb.csv`. Primero hacer un `bundle install`

Vale la pena instalar DBBrowser for SQLite

# Debugging

No parce que babel-node aporte nada sobre la versión actual de node en esta versión inicial del servidor. 
Todas las extensiones usadas en el server parecen estar disponibles.

```
[~/.../food-lookup-demo/db(01-crguezl-starting-point)]$ node --version
v12.10.0
```

# Executions

```
[~/.../how-to-get-create-react-app-to-work-with-your-API/food-lookup-demo(02-crguezl-server-with-ndb_no-api)]$ npm run server

> lookup-server@0.0.1 server /Users/casiano/local/src/javascript/learning/react/how-to-get-create-react-app-to-work-with-your-API/food-lookup-demo
> nodemon server.js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Find the server at: http://localhost:3001/
```

```
[~/.../how-to-get-create-react-app-to-work-with-your-API/food-lookup-demo(02-crguezl-server-with-ndb_no-api)]$ npm run get-5708

> lookup-server@0.0.1 get-5708 /Users/casiano/local/src/javascript/learning/react/how-to-get-create-react-app-to-work-with-your-API/food-lookup-demo
> curl localhost:3001/api/food/5708  | jq .

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   165  100   165    0     0    156      0  0:00:01  0:00:01 --:--:--   156
[
  {
    "ndb_no": 5708,
    "description": "Turkey, rtl parts, breast, meat only, w/ added soln, raw",
    "carbohydrate_g": 0,
    "protein_g": 21.99,
    "fat_g": "2.52",
    "kcal": 111,
    "sugar_g": 0
  }
]
```

# Here we go

Starting with the section [Here we go](https://www.newline.co/fullstack-react/articles/using-create-react-app-with-a-server/#here-we-go) of the tutorial, I decide to try the example more JAM-like style. thus, I am going to create a separated repo for the client and make the project in two parts: the client that I intend to deploy in GitHub or Netlify
and the server that I will deploy in Heroku

