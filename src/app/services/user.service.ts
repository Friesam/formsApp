import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config  } from '../../../config/DB';
import { User } from '../models/User';

@Injectable({
    providedIn:'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(config.apiUrl + '/users');
    }

    getById(id: string) {
        return this.http.get(config.apiUrl + '/users/' + id);
    }

    create(user: User) {
        return this.http.post(config.apiUrl + '/users/register', user);
    }

    update(user: User) {
        return this.http.put(config.apiUrl + '/users/' + user.id, user);
    }

    delete(id: string) {
        return this.http.delete(config.apiUrl + '/users/' + id);
    }
}