const config = require('../config');

const PdgaService = {
    login() {
        return fetch(`https://api.pdga.com/services/json/user/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: {
                "username":"Daniel Fong 146610","password":"iWXjpfDQt5!deE@"
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    logout(token, sessId) {
        return fetch(`https://api.pdga.com/services/json/user/logout`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-token': `${token}`,
                'Cookie': `${sessId}`
            },
            // body: {
            //     "username":"Daniel Fong 146610","password":"iWXjpfDQt5!deE@"
            // },
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

    getCoursesByName(name) {
        return fetch(`https://api.pdga.com/services/json/course?course_name=${name}`, {
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
        }).then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    getCoursesById(id) {
        return fetch(`https://api.pdga.com/services/json/course?course_id=${id}`, {
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