/**
 * BuyPlanController
 *
 * @description :: Server-side logic for managing plans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `BuyPlanController.getBuyPlans()`
   */
  getBuyPlans: function (req, res) {
    Buyplan.find().exec(function (err, usersNamedFinn){
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
   * `BuyPlanController.editBuyPlan()`
   */
  editBuyPlan: function (req, res) {
    return res.json({
      todo: 'editBuyPlan() is not implemented yet!'
    });
  },


  /**
   * `BuyPlanController.updateBuyPlan()`
   */
  updateBuyPlan: function (req, res) {

  //   var ObjectId = require('mongodb').ObjectID;
  //   var x = new  ObjectId(req.body.id);
  //   console.log(x);
  //   Plan.find({id: x}).exec(function(error, plan) {
  //   if(error) {
  //       // do something with the error.
  //   }
  //   console.log(plan);
  //   if(req.body.name) {
  //       plan.name = req.body.name;
  //   }
  //   // Repeat for each eligible attribute, etc.
  //   if(plan) {
  //     Plan.update({name: req.body.name}, req.body).exec(function (err, updated){
  //       if (err) { return res.serverError(err); }
        
  //       res.json(updated);
  //     });
  //   }
  // });
  },


  /**
   * `PlanController.createBuyPlan()`
   */
  createBuyPlan: function (req, res) {
     Buyplan.create(req.body).exec(function (err, finn){
          if (err) { return res.serverError(err); }

          return res.json("success");
        });
      }



};

