/**
 * PlanController
 *
 * @description :: Server-side logic for managing plans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `PlanController.getPlans()`
   */
  getPlans: function (req, res) {
    Plan.find().exec(function (err, usersNamedFinn){
      if (err) {
        return res.serverError(err);
      }
      return res.json(usersNamedFinn);
    });
  },


  /**
   * `PlanController.editPlan()`
   */
  editPlan: function (req, res) {
    return res.json({
      todo: 'editPlan() is not implemented yet!'
    });
  },


  /**
   * `PlanController.updatePlan()`
   */
  updatePlan: function (req, res) {
    return res.json({
      todo: 'updatePlan() is not implemented yet!'
    });
  },


  /**
   * `PlanController.createPlan()`
   */
  createPlan: function (req, res) {
    Plan.create(req.body).exec(function (err, finn){
      if (err) { return res.serverError(err); }

      return res.ok();
    });
  }
};

