let express=require('express');

let app=express();
let port=process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

app.use('/',(req, res, next) => {
    console.log('Request URL:' + req.url);
    next()
});

app.get('/',  (req, res) => {
    res.render('index');
});
app.get('/number/:num',  (req, res) => {
    res.render('number', {num: req.params.num})
});
let data = [
    {id:1, nombre: 'David', apellido: 'Cruz', edad:19},
    {id:2, nombre: 'Brian', apellido: 'Hernandez', edad:20},
    {id:3, nombre: 'Roy', apellido: 'Mustang', edad:26}
]
app.get('/personas',  (req, res) => {
    res.render('tabla', {data})
});
app.listen(port);


