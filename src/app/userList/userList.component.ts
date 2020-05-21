import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "../Services/user.service";
import { UserDatasourceService } from '../Services/userDatasource.service';
import { User } from '../model/user';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-userList",
  templateUrl: "./userList.component.html",
  styleUrls: ["./userList.component.css"],
})
export class UserListComponent implements OnInit {
  debugger;
  users: User;

  dataSource: UserDatasourceService;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("TABLE", { static: true }) table: ElementRef;
  constructor(private userServices: UserService,
    private router: Router,
    private route: ActivatedRoute) {}

  public displayedColumns: string[] = [
    "firstname",
    "lastname",
    "email",
    "mobile",
    // "profile_image",
    "update",
    "delete",
  ];


  ngOnInit() {
    
    this.dataSource = new UserDatasourceService(this.userServices);
    this.dataSource.loadUser("asc", 0, 3); //this.users.userID, '',
  }
  ngAfterViewInit(): void {
   //this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }
  public redirectToUpdate = (id: string) => {};

  public redirectToDelete = (id: string) => {};
  
  
}
