import 'bootstrap/dist/css/bootstrap.min.css';
import gon from 'gon';
import '../assets/application.css';
import app from './app.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

app(gon);
