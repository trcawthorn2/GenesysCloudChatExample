import Component from '@ember/component';
import { observer } from '@ember/object';
import Ember from 'ember';
import { computed } from '@ember/object';
// import { A } from '@ember/array';

export default Component.extend({
    classNames: ['groups-overview'],    
    // authService: Ember.inject.service(),
    groupService: Ember.inject.service(),
    
    selectedGroup: computed(function () {        
        // console.log('### model', this.model);
        // return this.get('model').find(x => x.id === model.id);
    })
    
});
