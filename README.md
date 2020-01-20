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

# npx 

* [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
* [¿Qué es npx?](https://xavitristancho.pro/blog/que-es-npx) 
  
**Si usáis npx no tendréis que instalar nunca más un paquete como paquete global para poder ejecutarlo**
 
Otra ventaja de `npx` es que puedes ejecutar cualquier paquete `npm` sin tenerlo instalado. 
Por tanto no tenemos por que instalar en local el paquete `create-react-app` para poder generar un proyecto. 
Con `npx` podemos ejecutar `$ npx create-react-app` y se encargará de descargar el paquete en su última versión, que haga su cometido para finalmente eliminarlo de nuestro sistema, esto también es perfecto para probar si una herramienta puede serviros o no de manera rápida.

See also:  [create-react-appp: getting started](https://create-react-app.dev/docs/getting-started/)

> If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` to ensure that `npx` always uses the latest version.

Have you ever run into a situation where you want to try some CLI tool, but it’s annoying to have to install a global just to run it once? npx is great for that, too. Calling `npx <command>` when `<command>` isn’t already in your `$PATH` will automatically install a package with that name from the npm registry for you, and invoke it. When it’s done, the installed package won’t be anywhere in your globals, so you won’t have to worry about pollution in the long-term.

# react-scripts

See [Section react-scripts](https://www.newline.co/fullstack-react/articles/using-create-react-app-with-a-server/#react-scripts)

But why does our React app need its own server? And how are we going to get these two servers working together?

Understanding this requires getting down to The Rub.

# The Rub

