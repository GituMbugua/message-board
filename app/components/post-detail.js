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
    }
  }
});
