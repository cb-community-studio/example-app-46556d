const { Personalinfo } = require('./personalinfo.class');
const createModel = require('../../models/personalinfo.model');
const hooks = require('./personalinfo.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/personalinfo', new Personalinfo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('personalinfo');

  service.hooks(hooks);
};