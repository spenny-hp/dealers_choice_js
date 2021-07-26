import express from 'express';
import path from 'path';
import logger from 'morgan';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(logger('dev'));

