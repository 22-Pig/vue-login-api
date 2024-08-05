import http from "@/api";
import { SYS } from "@/api/config/servicePort";
import axios from 'axios';
import { useUserStore } from "@/stores/modules/user";
/* export const userInfo = (token) => {
    // console.log(useUserStore().getToken());

    http.get(SYS + `/auth/info`, {
        headers: {
            Authorization: token
        }
    }).then(response => {
        console.log(response);
        return response.data;
    }).catch(error => {
        console.error(error);
    });
    // return response.data;
}; */

export const userInfo = (token) => {
    return new Promise((resolve, reject) => {
        // console.log(useUserStore().getToken());
        http.get(SYS + `/auth/info`, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            console.log(response);
            resolve(response);
        }).catch(error => {
            console.error(error);
            reject(error);
        });
    });
};
