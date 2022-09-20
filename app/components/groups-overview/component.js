import Component from '@ember/component';
import Ember from 'ember';
import { computed } from '@ember/object';
// import { A } from '@ember/array';

export default Component.extend({
    classNames: ['groups-overview'],    
    // authService: Ember.inject.service(),
    groupService: Ember.inject.service(),
    searchService: Ember.inject.service(),

    // selectedGroup: computed(function () {
        // return this.get('model').find(x => x.id === model.id);
    // }),

    actions: {
        searchRepo(searchValue) {
            console.log(searchValue);
            console.log(this.model);
            if (searchValue && searchValue.length > 1) {
                return this.model.filter(group => {
                    const name = group.name//,listingName = name[selectedLocale] || name['en-us'];
    
                    //this.set('currentPage', 1);
                    return name && name.toLowerCase().includes(searchValue.toLowerCase());
                });
            } else {
                return this.model;
            }
        },
        searchChatRooms() {
            this.get('searchService').searchChatRooms(this.term, this.group).then(result => {
                console.log(result);
            })
        }
    }
    // icon: computed('model', function () {
    //     console.log('### model', this.model);
    //     return 'user';
    // })
});
