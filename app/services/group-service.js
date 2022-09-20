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
            return this.get('restClientService').get('https://apps.inindca.com/directory/api/v3/people/d1ef415c-eec6-403a-80bf-0ac8361be141/favorites?entityType=person,group', {headers:{'Content-Type':'application/json', 'Authorization': 'bearer '+this.get('authService').authToken}} );
        }
    
    },
 
    getGroups: function () {
        if (this.get('authService').authToken) {
            let state = this.get('urlStateService').cachedState();
            let urlParams = new URLSearchParams(state);
            let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));
            return this.get('restClientService').get(url+'/api/v2/groups?pageSize=500', {headers:{'Content-Type':'application/json', 'Authorization': 'bearer '+this.get('authService').authToken}} );
        }
    }
});