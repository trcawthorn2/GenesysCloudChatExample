import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    store: Ember.inject.service(),
    authService: Ember.inject.service(),
    urlStateService: Ember.inject.service(),
    restClientService: Ember.inject.service(),
    regionLocatorService: Ember.inject.service(),
    getGroups: function(){
        if(this.get('authService').authToken){
            let state = this.get('urlStateService').cachedState();
            let urlParams = new URLSearchParams(state);
            let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));
            return this.get('restClientService').get(url+'/api/v2/groups?pageSize=500', {headers:{'Content-Type':'application/json', 'Authorization': 'bearer '+this.get('authService').authToken}} );
        }
    },
});
