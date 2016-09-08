var addressModel = require('../model/addressModel.js');

exports.addressModel = {
  convertAddress: convertAddress
}

function convertAddress(req, res) {
  // console.log('req inside location.controller', req)
  addressModel.convertAddress(req.query, res);
}
