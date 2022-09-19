import Service from '@ember/service';
import Ember from 'ember';

function _convertUrl(url, clientId) {
    return url+ `/oauth/authorize?client_id=${clientId}&response_type=token&redirect_uri=${window.location.origin}`
}

export default Service.extend({
    restClientService: Ember.inject.service(),
    regionLocatorService: Ember.inject.service(),
    urlStateService: Ember.inject.service(),
    authToken: undefined,
    init(){
        let urlParams = new URLSearchParams(window.location.hash.substr(1));
        let token = urlParams.get('access_token');
        if (!token) {
            console.log("#### No Token");
            urlParams = new URLSearchParams(window.location.search);
            this.get('urlStateService').storeState();
            let clientId = urlParams.get('clientId');
            let regionUrl = this.get('regionLocatorService').getRegionAuthUrl(urlParams.get('region'));
            window.location = _convertUrl(regionUrl,clientId)
            
        } else {
            console.log(' TOKEN FOUND');
            this.authToken = token;
        }
    }
});
