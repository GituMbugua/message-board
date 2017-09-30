import Ember from 'ember';

export default Ember.Component.extend({
  totalAnswers: Ember.computed('post.answers.length', function() {
    return this.get('post.answers.length') + ' ' + 'answers';
  }),

  actions: {
    
  }
});
