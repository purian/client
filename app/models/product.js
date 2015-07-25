import DS from 'ember-data';

export default DS.Model.extend({
    id: DS.attr('integer'),
    name: DS.attr('string'),
    category: DS.attr('string'),
    sku: DS.attr('string'),
    createdAt: DS.attr('date'),
    updatedAt: DS.attr('date')
});