import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    intl: Ember.inject.service(),
    groupService: Ember.inject.service(),    
    init() {
        this._super();
        this.get('intl').setLocale('en-us');
    }, 
    model() {
        return this.get('groupService').getGroups().then(groups => {
            return this.get('groupService').getFavorites().then(favs => {
                const favoriteIds = favs.res.map(x => x.favoriteId);
                const favoriteGroups = Ember.A();
                groups.entities.forEach(group => {                    
                    if (favoriteIds.includes(group.id)) {
                        favoriteGroups.pushObject(group);
                        groups.entities.removeObject(group);
                    }
                });

                this.get('groupService').set('favoriteGroups', favoriteGroups);

                const response = Ember.A([
                    {
                        groupName: "Favorites", options: favoriteGroups
                    },
                    {
                        groupName: "Official Groups", options: groups.entities
                    }
                ]);

                return response;
            }).catch((error) => {
                return Ember.A([
                    {
                        groupName: "Official Groups",
                        options: groups.entities
                    }
                ])
            });
        });
    }
});