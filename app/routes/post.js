import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    edit(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    deleteQuestion(post) {
      var answer_deletions = post.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return post.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var post = params.post;
      post.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('post', post.id)
    }
  }
});
