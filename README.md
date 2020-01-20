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