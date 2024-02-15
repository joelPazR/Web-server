import express from 'express';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';
import hbs from 'hbs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT;
app.use(express.static('public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jo',
        titulo: 'Curso node'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jo',
        titulo: 'Curso node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jo',
        titulo: 'Curso node'
    });
});
app.listen(port);
