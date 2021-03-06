/**
 * Import Router from `Express.js`.
 *
 * Router will help us to create endpoints using shortcuts like:
 *     `get()`
 *     `post()`
 *     `put()`
 *     `delete()`
 */
const { Router } = require('express');
/* Initialise and create a Router instance */
const app = Router();

/**
 * Controllers
 *
 * They will help us to write our logic in a separated file to keep clean
 * our routes configuration file.
 *
 * [1] Companies
 */
const Companies = require('../controllers/Companies');
const User = require('../controllers/User')

/**
 * Endpoints
 *
 * [1] Companies
 *     `get(/companies)`
 *     `post(/companies)`
 *     `put(/companies)`
 *     `delete(/companies)`
 */
app.route('/companies')
  .get(Companies.index)
  .post(Companies.create)
  .put(Companies.update)
  .delete(Companies.remove);

app.get('/companies/:companyId', Companies.getById);

//rutas user
app.post('/users/', User.index);
app.delete('/users/:userId', User.create);
app.post('/auth/signup', User.create);
app.post('/auth/login', User.login);

module.exports = app;