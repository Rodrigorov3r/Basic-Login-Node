import express from 'express';
import ejs from 'ejs';
import bcrypt from 'bcrypt';

const app = express();

//tell express that i will use ejs sintax
app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000, () => console.log('server up!'));
