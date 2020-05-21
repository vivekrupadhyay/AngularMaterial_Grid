import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { DataSource } from '@angular/cdk/collections';
import { UserService } from './user.service';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { catchError,finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDatasourceService implements DataSource<User> {
  private userSubject = new BehaviorSubject<User[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  users:User;
constructor(private userServices: UserService) { }
loadUser(
  sortDirection: string,
  pageIndex: number,
  pageSize: number
) {
  debugger;
  this.loadingSubject.next(true);
  this.userServices
    .findUsers(sortDirection, pageIndex, pageSize) 
    .pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
    .subscribe((users) => {
      debugger
      this.userSubject.next(users);
      console.log(users);
    });
}
connect(): Observable<User[]> {
  debugger;
  console.log("Connecting data source :", this.userSubject.asObservable());
  return this.userSubject.asObservable();
}

disconnect(): void {
  this.userSubject.complete();
  this.loadingSubject.complete();
}
}
