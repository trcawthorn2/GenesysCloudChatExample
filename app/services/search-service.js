import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    store: Ember.inject.service(),
    authService: Ember.inject.service(),
    urlStateService: Ember.inject.service(),
    restClientService: Ember.inject.service(),
    regionLocatorService: Ember.inject.service(),
    getBaseUrl: function() {
        let state = this.get('urlStateService').cachedState();
        let urlParams = new URLSearchParams(state);
        return this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));
    },
    serachChatRooms: async function(term, chatRooms) {
        if (this.get('authService').authToken) {
            let results = [];
            chatRooms.forEach(async (room) => {
                let searchResults = await this.searchChat(term, room);
                results.push({id:room.id, results:searchResults})
            });
            return results;
        }
    },
    searchChat: function(term, room) {
        let restClient = this.get('restClientService');
        let baseUrl = this.getBaseUrl();
        let url = `${baseUrl}/api/v2/search`;
        let data = {
            types:['messages'],
            sortBy:'created',
            sortOrder:'DESC',
            expand:['to','from'],
            pageNumber:1,
            pageSize:25,
            query:[
                {
                    type:'SIMPLE',
                    value:term,
                    fields:['body']
                },
                {
                    type:'EXACT',
                    fields:['targetJids'],
                    values:[room.id]
                }
            ]
        };
        return restClient.post(url, data, restClient.getOptions(this.get('authService').authToken));
    }
});
