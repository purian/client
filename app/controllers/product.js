import Ember from 'ember';

export default Ember.Controller.extend({

    isEditing: false,
    needs: ['productEdit'],

    startEditing: function() {
        var productEditController = this.get('controllers.productEdit');
        productEditController.set('model', this.get('model'));
        productEditController.startEditing();
        this.set('isEditing', true);
    },

    stopEditing: function() {
        this.set('isEditing', false);
        this.get('model').rollback();
    }

});
