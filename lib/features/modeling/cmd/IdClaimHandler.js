'use strict';


function IdClaimHandler(moddle) {
  this._moddle = moddle;
}

IdClaimHandler.$inject = [ 'moddle' ];

module.exports = IdClaimHandler;


IdClaimHandler.prototype.execute = function(context) {
  var ids = this._moddle.ids,
      id = context.id,
      element = context.element,
      claiming = context.claiming;

  if (claiming) {
    ids.claim(id, element);
  } else {
    ids.unclaim(id);
  }
};


IdClaimHandler.prototype.revert = function(context) {
  var ids = this._moddle.ids,
      id = context.id,
      element = context.element,
      claiming = context.claiming;

  if (claiming) {
    ids.unclaim(id);
  } else {
    ids.claim(id, element);
  }
};
