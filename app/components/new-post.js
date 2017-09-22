import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    cancel() {
      this.set('addNewPost', false);
    },

    savePost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
