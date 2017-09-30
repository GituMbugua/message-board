import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
      };
      this.set('editPostForm', false);
      this.sendAction('edit', post, params);
    },

    saveAnswer(post) {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        post: this.get('post')
      };
      this.sendAction('saveAnswer', post, params);
    }
  }
});
