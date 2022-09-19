import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    browserStorageService: Ember.inject.service(),
    storeState: function(){
        this.get('browserStorageService').setLocalStorageItem('GroupExample.UrlState',window.location.search);
    },
    cachedState: function(){
        return this.get('browserStorageService').getLocalStorageItem('GroupExample.UrlState');
    }
});
