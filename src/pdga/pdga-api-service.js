const config = require('../config');

const PdgaService = {
    login() {
        return fetch(`https://api.pdga.com/services/json/user/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "X-Requested-With": "XMLHttpRequest"
            },
            body: {
                "username":"Daniel Fong 146610","password":"iWXjpfDQt5!deE@"
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    logout() {
        return fetch(`https://api.pdga.com/services/json/user/logout`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "X-Requested-With": "XMLHttpRequest"
            },
            body: {
                "username":"Daniel Fong 146610","password":"iWXjpfDQt5!deE@"
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    getCoursesByZip(zip) {
        return fetch(`https://api.pdga.com/services/json/course?postal_code=${zip}`, {
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
        }).then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
}

module.exports = PdgaService;