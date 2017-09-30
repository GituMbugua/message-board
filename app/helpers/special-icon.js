import Ember from 'ember';

export function specialIcon(params/*, hash*/) {
  var post = params[0];

  if (post.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-exclamation-sign" data-toggle="tooltip" title="This question has no answers"></span>');
  }
}

export default Ember.Helper.helper(specialIcon);
""