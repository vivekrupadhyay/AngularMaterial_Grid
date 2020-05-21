import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "./../../environments/environment";
import { User } from '../model/user';
import { throwError, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
constructor(private http:HttpClient) { 

}
 
 
  findUsers(
    sortOrder = "asc",
    pageNumber = 0,
    pageSize = 3
  ): Observable<User[]> {
    debugger;
    return this.http
      .get(environment.apiEndPoint, {
        //
        params: new HttpParams()
          .set("sortOrder", sortOrder)
          .set("pageNumber", pageNumber.toString())
          .set("pageSize", pageSize.toString()),
      })
      .pipe(map((res) => res["users"]));
  }
}
