/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'POST /api/v1/user/register': 'UserController.register',
  'POST /api/v1/user/login': 'UserController.login',

  'GET /api/v1/plan/getplans': 'PlanController.getPlans',
  'POST /api/v1/plan/create': 'PlanController.createPlan',
  'POST /api/v1/plan/edit': 'PlanController.editPlan',
  'POST /api/v1/plan/update': 'PlanController.updatePlan',


  'GET /api/v1/buyplan/getbuyplans': 'BuyPlanController.getBuyPlans',
  'POST /api/v1/buyplan/createbuyplan': 'BuyPlanController.createBuyPlan',
  'POST /api/v1/buyplan/editbuyplan': 'BuyPlanController.editBuyPlan',
  'POST /api/v1/buyplan/updatebuyplan': 'BuyPlanController.updateBuyPlan',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
