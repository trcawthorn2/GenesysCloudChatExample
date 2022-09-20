import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    classNames: ['groups-overview'],        
    groupService: Ember.inject.service(),
    searchService: Ember.inject.service(),
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
});
