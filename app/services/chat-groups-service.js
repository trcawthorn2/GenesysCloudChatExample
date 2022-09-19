import Service, { inject as service } from '@ember/service';


export default Service.extend({
    authService: service(),
    urlStateService: service(),
    regionLocatorService: service(),
    restClientService: service(),

    getCurrentChatGroups: function() {
        if (this.get('authService').authToken) {
            this.getCurrentUser().then(results => {
                console.log(results);

                let userId = results.id;

                this.getFavorites(userId).then(results => {
                    console.log(results);
                    // this.getGroupDetailsFromGroupIds(results.res).then(moreResults => {
                    //     console.log(moreResults);
                    // });
                });


                //let groups = results.groups;
                //let favorites = results.favorites;
            });
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

    getFavorites: function(userId) {
        if (this.get('authService').authToken) {
            let state = this.get('urlStateService').cachedState();
            let urlParams = new URLSearchParams(state);
            let url = this.get('regionLocatorService').getRegionUrl(urlParams.get('region'));

            let headers = {
                'Content-Type':'application/json',
                //'Access-Control-Allow-Origin': '*',
                Authorization: 'bearer ' + this.get('authService').authToken
            }

            return this.get('restClientService').get(url + '/directory/api/v3/people/' + userId + '/favorites?entityType=group,person', {headers} );
        }
    },


    getGroupDetailsFromGroupIds: function(groups) {
        if (this.get('authService').authToken) {
            let state = this.get('urlStateService').cachedState();
            let urlParams = new URLSearchParams(state);
            let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));

            let headers = {
                'Content-Type':'application/json',
                Authorization: 'bearer ' + this.get('authService').authToken
            }

            let ids = '';

            groups.forEach((x, index, array) => {
                ids += x.id;
                if (index !== array.length - 1) {
                    ids += ','
                }
            })

            return this.get('restClientService').get(url + '/api/v2/groups?id=' + ids, {headers} );
        }

    }

});
