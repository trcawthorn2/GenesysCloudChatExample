import Component from '@ember/component';
import { observer } from '@ember/object';
import Ember from 'ember';
import { A } from '@ember/array';

export default Component.extend({
    classNames: ['groups-overview'],
    authService: Ember.inject.service(),
    groupService: Ember.inject.service(),
    totalGroupCount: undefined,
    content: [],
    isLoading: true,
    possiblePageSizes: [15],
    groupsUpdated: observer('authService.authToken', 'groupService.getGroups', function(){
        this.set('isLoading', true);
        let rawGroups = this.get('groupService').getGroups().then((data)=>{
            this.set('totalGroupCount', data.total);
            this.set('content', data.entities);
            this.set('isLoading', false);
            return A(data.entities);
        });
        return rawGroups;
    }).on('init'),
    columnDefs: Ember.computed(function () {
        return [
            { key: 'id', header: 'Id', width: '20%', component:'link-to-cell' },
            { key: 'name', header: 'Name', width: '20%', filter:{type:'search'} , component:'link-to-cell'},
            { key: 'memberCount', header: 'Member Count', width: '20%' }
        ];
    })
});
