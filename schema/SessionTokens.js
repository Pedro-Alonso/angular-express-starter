'use strict';

exports = module.exports = function(app, mongoose) {
  var schemaSessionToken = new mongoose.Schema({
    token: { type: String, default: generateToken() },
    userCreated: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      name: { type: String, default: '' },
      time: { type: Date, default: Date.now }
    },
    expiredAt: { type: Date }
  });
  
  app.db.model('SessionTokens', schemaSessionToken);
};

var generateToken = function() {
  var token = '',
    length = 24,
    chars = 'abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (var i = 0; i < length; i++) 
      token += chars[Math.floor(Math.random() * chars.length)];
    return token;
};