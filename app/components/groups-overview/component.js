import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    classNames: ['groups-overview'],
    groupService: Ember.inject.service(),
    searchService: Ember.inject.service(),

    sortResults(response) {
        let results = response.results;

        let sortedResults = [];

        this.group.forEach(group => {
            let filteredResults = results.filter(result => result.chatRoomName === group.name);

            let helloThere = {
                name: group.name,
                results: filteredResults
            }

            sortedResults.push(helloThere);
        });

        this.set('sortedResults', sortedResults);
    },


    actions: {
        searchRepo(searchValue) {
            // console.log(searchValue);
            // console.log(this.model);
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
            if (this.group && this.term && this.group.length > 0) {
                return this.get('searchService').searchChat(this.term, this.group).then(result => {
                    this.sortResults(result);
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
