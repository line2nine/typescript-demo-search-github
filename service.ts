import {fetch} from 'cross-fetch'

export class Service {
    public url: string;

    constructor() {
        this.url = 'https://api.github.com/search/repositories?q=';
    }

    async getData(keyword: string) {
        let respone = await fetch(this.url + keyword);
        return respone.json();
    }
}