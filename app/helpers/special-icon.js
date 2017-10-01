import Ember from 'ember';

export function specialIcon(params/*, hash*/) {
  var post = params[0];

  if (post.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-exclamation-sign" data-toggle="tooltip" title="This question has no answers"></span>');
  } else if (post.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty" data-toggle="tooltip" title="This question has more than 5 answers"></span>');
  }
}

export default Ember.Helper.helper(specialIcon);
""