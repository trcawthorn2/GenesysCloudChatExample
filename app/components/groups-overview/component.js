import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    classNames: ['groups-overview'],        
    groupService: Ember.inject.service(),
    searchService: Ember.inject.service(),   
    
    actions: {
        searchRepo(searchValue) {
            if (searchValue && searchValue.length > 1) {
                let allGroups = this.model[1].options;
                return allGroups.filter(group => {
                    const name = group.name;
                    return name && name.toLowerCase().includes(searchValue.toLowerCase());
                });
            } else {
                return this.model;
            }
        },
        searchChatRooms() {
            if (this.group && this.term && this.group.length > 0) {                
                return this.get('searchService').searchChat(this.term, this.group).then(result => {                
                    this.set('resultsCount', result.total);
                    this.set('resultsContent', result.results);
                    return result;
                });
            }

        },
        onKeyPress(event) {
            if (event.key === 'Enter') {
                this.send('searchChatRooms');
            }
        }
    }
});
