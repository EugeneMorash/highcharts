import {instance} from "./api";


export const appAPI = {
    getData() {
        return instance.get('/')
    }
}