var addressModel = require('../model/addressModel.js');

exports.addressModel = {
  convertAddress: convertAddress;
}

function convertAddress(req, res) {
  addressModel.convertAddress(req.body, res);
}
