const express = require('express');
const fs = require('fs');
const sqlite = require('sql.js');

const filebuffer = fs.readFileSync('db/usda-nnd.sqlite3');

const db = new sqlite.Database(filebuffer);

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const COLUMNS = [
  'ndb_no',
  'description',
  'carbohydrate_g',
  'protein_g',
  'fa_sat_g',
  'fa_mono_g',
  'fa_poly_g',
  'kcal',
  'sugar_g'
];

const qcolumns = COLUMNS.join(', ');

function buildAnswer(r) {
  // console.log('buildAnswer',r);
  return r.values.map((entry) => {
    const e = {};
    COLUMNS.forEach((c, idx) => {
      // Sumaremos todas las grasas
      if (c.match(/^fa_/)) {
        e.fat_g = e.fat_g || 0.0; // Inicializamos e.fat_g como 0.0 si no está definido 
        e.fat_g = (
          parseFloat(e.fat_g, 10) + parseFloat(entry[idx], 10) // y acumulamos nueva grasa
        ).toFixed(2);
      } else {
        e[c] = entry[idx];
      }
    });
    // console.log(e);
    return e;
  })
}

app.get('/api/food', (req, res) => {
  const query = req.query.q;

  if (!query) {
    res.json({
      error: 'Missing required query `q`',
    });
    return;
  }

  // WARNING: Not for production use! The following statement
  // is not protected against SQL injections.
  const r = db.exec(`select ${qcolumns} from entries where description like '%${query}%' limit 100`);

  if (r[0]) res.json(buildAnswer(r[0]))
  else  res.json([]);
});

app.get('/api/food/:ndb_no', (req, res) => {
  const ndb_no = req.params.ndb_no;
  // console.log(ndb_no)
  const query = `select ${qcolumns} from entries where ndb_no = ${ndb_no}`
  // console.log(query);
  const r = db.exec(query);
  // console.log(r)

  if (r[0]) res.json(buildAnswer(r[0])) 
  else res.json([]);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
