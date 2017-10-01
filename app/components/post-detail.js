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
    delete(post) {
      if (confirm('Are you sure you want to delete this question? Deleting it will delete all its answers with it.' )) {
        this.sendAction('deleteQuestion', post);
      }
    },
    
    saveAnswer(post) {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        post: this.get('post')
      };
      this.sendAction('saveAnswer', post, params);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
  }
});
