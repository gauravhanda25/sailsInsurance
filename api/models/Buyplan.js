/**
 * Plan.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id: {
  		type: 'string',
		primaryKey: true,
  	},
  	clientid: {
	    type: 'string',
	},
	type: {
	    type: 'string',
	},
	medical: {
		type: 'string',
	},
	country: {
		type: 'string',
	},
	depart: {
		type: 'string',
	},
	arrival: {
		type: 'string',
	},
	cover: {
		type: 'string',
	}
  }
};

