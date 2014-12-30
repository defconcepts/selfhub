var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  /*
  * This function will return an object of all of the state in the store.
  * The returned state will then be trickle down through our top level
  * component to all of the sub components.
  */
  getAppState: function() {
    return {};
  }
});

//We need to find an elegant way to do this.
//Needs to happen at each event: AppStore.emitChange();

module.exports = AppStore;
