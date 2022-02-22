import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'username', 'address', 'phone', 'website', 'company'];
  userTable!: User[];
  

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.userService.getUsers().subscribe(data => {
      this.userTable = data;
    });
  }

  exportToExcel() {
    this.userService.exportToExcel(this.userTable, 'user');
  }

}
