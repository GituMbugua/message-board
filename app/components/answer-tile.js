import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(item) {
      this.get('favorites').add(item);
    },

    delete(answer) {
        if (confirm('Are you sure you want to delete this answer?')) {
          this.sendAction('deleteAnswer', answer);
        }
      }
    }
});
