import Ember from 'ember';

export default Ember.Component.extend({
  editPostForm: false,

  actions: {
    editPostForm() {
      this.set('editPostForm', true);
    },
    cancel() {
      this.set('editPostForm', false);
    },
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
