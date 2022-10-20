import express from 'express';
//import ejs from 'ejs';
import bcrypt from 'bcrypt';

const app = express();

//tell express that i will use ejs sintax
app.set('view-engine', 'ejs');

//tell the app that we access the form through request objet and name of the input
app.use(express.urlencoded({ extended: false }));

//my "db"
const db = [];

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', async (req, res) => {
  try {
    const hashPass = await bcrypt.hash(req.body.pass, 10);

    const user = {
      //"id"
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      pass: hashPass,
    };

    db.push(user);
    res.redirect('/login')
  } catch (error) {
    res.redirect('/register')
  }
  console.log(db);
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login', (req, res) => {});

app.listen(3000, () => console.log('server up!'));
