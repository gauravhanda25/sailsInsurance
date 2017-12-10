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
      if(usersNamedFinn.length) {
        return res.json(usersNamedFinn);
      } else {
        res.json("No plans available.");
      }
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
    Plan.find({id:req.body.id}).exec(function(error, plan) {
    if(error) {
        // do something with the error.
    }
    console.log(plan, req.body.id);
    // if(req.body.email) {
        // validate whether the email address is valid?

        // Then save it to the object.
        // plan.cover = req.body.cover;
    // }
    // Repeat for each eligible attribute, etc.
    if(plan) {
      Plan.update({id:req.body.id}, req.body).exec(function (err, updated){
        if (err) { return res.serverError(err); }
        
        res.json(updated);
      });
    }
  });
  },


  /**
   * `PlanController.createPlan()`
   */
  createPlan: function (req, res) {
    if(req.body.name) {
        Plan.find({name:req.body.name}).exec(function (err, plannamedfinn){
          if (err) {
            return res.serverError(err);
          }
          if(plannamedfinn.length) {
            return res.json("Plan name already exists!");
                      } else {
            Plan.create(req.body).exec(function (err, finn){
              if (err) { return res.serverError(err); }

              return res.json("success");
            });
          }
        });

      }
  }
};

