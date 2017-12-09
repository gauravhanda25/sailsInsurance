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
    Plan.findOne({id:req.body.id}).exec(function(error, plan) {
    if(error) {
        // do something with the error.
    }
    console.log(plan, req.body.id);
    if(req.body.email) {
        // validate whether the email address is valid?

        // Then save it to the object.
        plan.cover = req.body.cover;
    }
    // Repeat for each eligible attribute, etc.
    if(plan) {
      plan.save(function(error, updatedPlan) {
          if(error) {
              // do something with the error.
          } else {
              // value saved!
              res.json(updatedPlan);
          }
      });
    }
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

