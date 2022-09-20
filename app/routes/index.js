import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    intl: Ember.inject.service(),
    groupService: Ember.inject.service(),    
    init() {
        this._super();
        this.get('intl').setLocale('en-us');
    }, 
    model(params, transition) {
        return this.get('groupService').getGroups().then(results => {
            return results.entities;
        });
    }
});