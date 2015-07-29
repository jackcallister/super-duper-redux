import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import hotServer from './hotServer';
import appRoutes from './routes/appRoutes';
import sessionsRoutes from './routes/sessionsRoutes';
import config from './config/config';

let app = express();

app.set('views', 'src/server/views/');
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, '../../build')));

app.use('/favicon.ico', (req, res) => { return });

app.locals.config = config;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(cors());

app.use('/sessions', sessionsRoutes);
app.use('/', appRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('listening on *:' + port);
});

if (process.env.NODE_ENV === 'development') {
  hotServer.listen(4001, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }

    console.log('[webpack-dev-server]');
  });
}

export default app;
