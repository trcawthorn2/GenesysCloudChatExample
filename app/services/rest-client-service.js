import Service from '@ember/service';

export default Service.extend({
    getOptions: function(token) {
        return {
            headers:{
                'Content-Type':'application/json',
                Authorization: 'bearer '+token 
            }
        };
    },
    get: function(url, options) {
        options.url = url;
        return $.ajax(options);
    },
    post: function(url, data, options) {
        options.url = url;
        options.method = 'POST'
        // options.data = options.processData ? JSON.stringify(data) : data;
        options.data = JSON.stringify(data);
        return $.ajax(options);
    },
    put: function(url, data, options) {
        options.url = url;
        options.method = 'PUT'
        options.data = options.processData ? JSON.stringify(data) : data;
        return $.ajax(options);
    },
    delete: function(url, options) {
        options.url = url;
        options.method = 'DELETE'
        return $.ajax(options);
    }
});
