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
            let filteredResults = results.filter(result => result.chatRoomName === group.name).sort((a, b) => {return b.created - a.created});

            let mostRecentTimestamp = filteredResults.length > 0 ? filteredResults[0].created : null;

            let helloThere = {
                name: group.name,
                jid: group.chat.jabberId,
                results: filteredResults,
                mostRecentTimestamp: mostRecentTimestamp
            }

            sortedResults.push(helloThere);
        });

        sortedResults = sortedResults.sort((a, b) => {return b.mostRecentTimestamp - a.mostRecentTimestamp});

        this.set('sortedResults', sortedResults);
    },
    
    actions: {
        searchRepo(searchValue) {
            if (searchValue && searchValue.length > 1) {
                let allGroups = this.model.find(x => x.groupName === 'Official Groups').options;
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
