const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pracRouter = require('../11-dynamic-form/routes/prac');

app.use('/', pracRouter);

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, function() {
    console.log(`http://localhost:${port}`);
})


