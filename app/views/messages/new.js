import Ember from 'ember';

export default Ember.View.extend({

  classNames: ["new-msg-form"],

  getKeyCode(event) {
    return (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
  },

  keyPress(event) {
    var isEnterKeyPressed = (this.getKeyCode(event) === 13);
    if (isEnterKeyPressed) {
      this.$('form').submit();
    }
    return (isEnterKeyPressed) ? false : true;
  }
});
