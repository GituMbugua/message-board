import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      answers: this.store.findAll('answer')
    }); 
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('review', params);
      newAnswer.save();
      this.transitionTo('index');
    }
  }
});
