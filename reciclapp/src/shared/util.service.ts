
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class UtilService {

    User: any;

    constructor() {
        this.User = {
            name: 'Fabian David',
            lastName: 'Romero Jiménez',
            email: 'fabian.romero.jimenez@gmail.com',
            rol: 'administrador'
        }
    }

    getUser() {
        return this.User;
    }
}