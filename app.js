/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';

/**
 * node modules
 */
const cors = require('cors');
const cookieParser = require('cookie-parser');


/**
 * custom modules
 */

const login = require('./src/routers/login.route');
const auth = require('./src/routers/auth.route');
const authenticatedUser = require('./src/middlewares/auth_user.middleware');
const home = require('./src/routers/home.route');


//Initialize express app
const express = require('express');
const app = express();

/**
 * EJS settings
 */
app.set('view engine', 'ejs');

/**
 * Stetting static directory
 */
app.use(express.static(`${__dirname}/public`));

/**
 * Enable cors & cookie parser
 */
app.use(cors()).use(cookieParser());

/**
 * Login page
 */
app.get('/login', login)


/**
 * Auth page
 */
app.use('/auth', auth);


/**
 * Check user is authenticated
 */
app.use(authenticatedUser);


/**
 * Home page
 */
app.use('/', home);


app.listen(5000, () => {
  console.log(`Server listening at http://localhost:5000`);
});