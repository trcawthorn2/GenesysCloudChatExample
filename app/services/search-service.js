import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    store: Ember.inject.service(),
    authService: Ember.inject.service(),
    urlStateService: Ember.inject.service(),
    restClientService: Ember.inject.service(),
    regionLocatorService: Ember.inject.service(),
    groupService: Ember.inject.service(),

    getBaseUrl: function() {
        let state = this.get('urlStateService').cachedState();
        let urlParams = new URLSearchParams(state);
        return this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));
    },
    searchChatRooms: async function(term, chatRooms) {
        if (this.get('authService').authToken) {
            let results = [];
            chatRooms.forEach(async (room) => {
                let searchResults = await this.searchChat(term, room);
                results.push({id:room.id, results:searchResults})
            });
            return results;
        }
    },
    searchChat: function (term, chatRooms) {
        let jabberIds = chatRooms.map(x => x.chat.jabberId);
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
                    values:jabberIds                 
                }
            ]
        };
        return restClient.post(url, data, restClient.getOptions(this.get('authService').authToken)).then(response => {
            let results = response.results;

            let groupService = this.get('groupService');


            results.forEach(x => {
                let jid = x.to.jid;

                let group = groupService.favoriteGroups.find(y => {
                    return y.chat.jabberId.startsWith(jid)
                });
                if (!group) {
                    group = groupService.allGroups.find(y => {
                        return y.chat.jabberId.startsWith(jid)
                    });
                }
                if (group) {
                    x.chatRoomName = group.name;
                }
            })

            return response;
        });
    }
});