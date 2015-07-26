import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('products', function() {
      this.resource('product', { path: '/:product_id' });
      this.route('edit', {path: '/:product_id/edit'});
  });
});