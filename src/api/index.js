import { SERVER_API_END_POINT } from "../helpers/constants";

function parseResponse(response) {  
    return response.json().then((json) => {  
        if (json.status === "success" || json.status === "failed") {
            return json;
        }
        return Promise.reject(json);
    });
}

const api = {
    async get(url) {
        try {
            const token = JSON.parse(localStorage.getItem('user_token'));
            const bearer = 'Bearer ' + token;
            const response = await fetch(`${SERVER_API_END_POINT}${url}`, {
                method: 'GET',
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": bearer
                }),
            });
            return parseResponse(response);
        } catch (err) {
            console.log(err);
        }
    },

    async post(url, data) {
        try {
            const body = JSON.stringify(data);
            const token = JSON.parse(localStorage.getItem('user_token'));
            const bearer = 'Bearer ' + token;
            const response = await fetch(`${SERVER_API_END_POINT}${url}`, {
                method: 'POST',
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": bearer
                }),
                body,
            });
            return parseResponse(response);
        } catch (err) {
            console.log(err);
        }
    },
    async put(url, data) {
        try {
            const body = JSON.stringify(data);
            const token = JSON.parse(localStorage.getItem('user_token'));
            const bearer = 'Bearer ' + token;
            const response = await fetch(`${SERVER_API_END_POINT}${url}`, {
                method: 'PUT',
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": bearer
                }),
                body,
            });
            return parseResponse(response);
        } catch (err) {
            console.log(err);
        }
    },

    async delete(url) {
        try {
            const token = JSON.parse(localStorage.getItem('user_token'));
            const bearer = 'Bearer ' + token;
            const response = await fetch(`${SERVER_API_END_POINT}${url}`, {
                method: 'DELETE',
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": bearer
                }),
            });
            return parseResponse(response);
        } catch (err) {
            console.log(err);
        }
    },

}


export default api;