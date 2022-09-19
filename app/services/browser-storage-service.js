import Service from '@ember/service';

let parseItem = function (item) {
    let value;
    if (item) {
        value = JSON.parse(item)
    }
    return value;
}

export default Service.extend({
    getLocalStorageItem: function (key) {
        let value = window.localStorage.getItem(key);
        return parseItem(value);
    },

    getSessionStorageItem: function (key) {
        let value = window.sessionStorage.getItem(key);
        return parseItem(value);
    },

    setLocalStorageItem: function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    },

    setSessionStorageItem: function (key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    },

    removeLocalStorageItem: function (key) {
        window.localStorage.removeItem(key);
    },

    removeSessionStorageItem: function (key) {
        window.sessionStorage.removeItem(key);
    }
});