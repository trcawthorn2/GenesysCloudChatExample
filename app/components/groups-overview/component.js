import Component from '@ember/component';
import Ember from 'ember';
import { computed } from '@ember/object';
// import { A } from '@ember/array';

export default Component.extend({
    classNames: ['groups-overview'],    
    // authService: Ember.inject.service(),
    groupService: Ember.inject.service(),
    
    // selectedGroup: computed(function () {
        // return this.get('model').find(x => x.id === model.id);
    // }),

    // icon: computed('model', function () {
    //     console.log('### model', this.model);
    //     return 'user';
    // })
});
