import Component from '@ember/component';
import Ember from 'ember';
import { computed } from '@ember/object';
// import { A } from '@ember/array';

export default Component.extend({
    classNames: ['groups-overview'],        
    groupService: Ember.inject.service(),

    // favorites: computed('model.res', function () {
    //     this.model.res.foreach(result => {
    //         console.log('### result');
    //     })
    // })

    // icon: computed('model', function () {
    //     console.log('### model', this.model);
    //     return 'user';
    // })
});
