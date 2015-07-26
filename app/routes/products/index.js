import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';


export default Ember.Route.extend(RouteMixin, {
    queryParams: {
        category_filter: {
            refreshModel: true
        }
    },
    perPage: 25,
    model:function(params, transition) {
        return this.findPaged('product',transition.queryParams);
    },
    actions: {
        queryParamsDidChange: function(){
            this.refresh();
        }
    },
    setupController: function(controller, context, queryParams) {
        controller.set('model', context);
        controller.set('filter', queryParams.queryParams.category_filter);
    }


});
