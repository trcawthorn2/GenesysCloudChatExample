import Service from '@ember/service';
import { A } from '@ember/array';
import RSVP from 'rsvp';

export default Service.extend({
    // store: Ember.inject.service(),
    authService: Ember.inject.service(),
    urlStateService: Ember.inject.service(),
    restClientService: Ember.inject.service(),
    regionLocatorService: Ember.inject.service(),
    
    getFavorites: function () {
        if (this.get('authService').authToken) {
            let state = this.get('urlStateService').cachedState();
            let urlParams = new URLSearchParams(state);
            let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));

            return this.getCurrentUser().then(user => {
                return this.get('restClientService').get(`https://apps.inindca.com/directory/api/v3/people/${user.id}/favorites?entityType=person,group`, { headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.get('authService').authToken } });
            });
        }
    },
 
    getGroups: function () {
        if (this.get('authService').authToken) {
            let state = this.get('urlStateService').cachedState();
            let urlParams = new URLSearchParams(state);
            let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));
            return this.get('restClientService').get(url+'/api/v2/groups?pageSize=500', {headers:{'Content-Type':'application/json', 'Authorization': 'bearer '+this.get('authService').authToken}} );
        }
    },

    getCurrentUser: function() {
        if (this.get('authService').authToken) {
            let state = this.get('urlStateService').cachedState();
            let urlParams = new URLSearchParams(state);
            let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));

            let headers = {
                'Content-Type':'application/json',
                Authorization: 'bearer ' + this.get('authService').authToken
            }

            return this.get('restClientService').get(url + '/api/v2/users/me?expand=groups,favorites', {headers} );
        }

    },
});