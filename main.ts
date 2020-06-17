import { Service } from "./service";

import {fetch} from 'cross-fetch'

export class Main {
    public service: any;

    constructor(service: Service) {
        this.service = service;
    }

    findProject(keyword: string) {
        this.service.getData(keyword).then(
            result => {
                console.log(result)
            }
        )
    }
}

let main = new Main(new Service);
main.findProject('angular')