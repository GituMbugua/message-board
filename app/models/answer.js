import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  author: DS.attr(),
  answer: DS.attr(),
  post: DS.belongsTo('post', { async: true }),
  
  favorites: Ember.inject.service(),
  
  inFavorites: Ember.computed('favorites.items.[]', function() {
    return this.get('favorites').includes(this);
  })
});