import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { USERS } from './data/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
	setGroupFilter$ = new Subject<any>();
	getGroupFilter = this.setGroupFilter$.asObservable();
	constructor() {}
	fetchUsers(): Observable<any> {
		return of(USERS);
	}
}