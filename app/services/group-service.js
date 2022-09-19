import Service from '@ember/service';
import { A } from '@ember/array';
import RSVP from 'rsvp';

export default Service.extend({
    // store: Ember.inject.service(),
    // authService: Ember.inject.service(),
    // urlStateService: Ember.inject.service(),
    // restClientService: Ember.inject.service(),
    // regionLocatorService: Ember.inject.service(),
    
    getGroups: function () {
        // if(this.get('authService').authToken){
        //     let state = this.get('urlStateService').cachedState();
        //     let urlParams = new URLSearchParams(state);
        //     let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));
        //     return this.get('restClientService').get(url+'/api/v2/groups?pageSize=500', {headers:{'Content-Type':'application/json', 'Authorization': 'bearer '+this.get('authService').authToken}} );
        // }
        
        return RSVP.resolve(A(
            [{
                groupName: "People", options: [
                    {
                        "id": "1",
                        "name": "Ryan Test"
                    },
                    {
                        "id": "2",
                        "name": "Andrew Schmidt"
                    }
                    
                ]
            },
            {
                groupName: "Groups", options: [
                    {
                        "id": "2339d855-7383-4def-b16a-c8de726aeba9",
                        "name": "Red Stapler Society"
                    },
                    {
                        "id": "b42cf716-5acf-4f41-ba08-c293c40be1c2",
                        "name": "Aymane Group 1"
                    }
                    
                ]
            }]
        ))
    }
});
