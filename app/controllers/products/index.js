import Ember from 'ember';

export default Ember.Controller.extend({

    queryParams: ['category_filter'],
    category_filter: null,

    clearFilter: function() {
        this.set('filter', '');
        this.set('category_filter', '');
        }

});
