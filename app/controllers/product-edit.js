import Ember from 'ember';

export default Ember.Controller.extend({

    needs: ['product'],

    startEditing: function() {

    },

    save: function() {
        var product = this.get('model');
        product.save();
        this.get('controllers.product').stopEditing();
    },

    cancel: function() {
        this.get('controllers.product').stopEditing();
    }




});
