import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private data: DataService, private auth: AuthService) {
  }

  getAdmin() {
    this.data.getAuth('/admin').subscribe(d => {
      return console.log('getAdmin: ' + d);
    });
  }

  getManager() {
    this.data.getAuth('/manager').subscribe(d => {
      return console.log('getManager: ' + d);
    });
  }

  getAdminManager() {
    this.data.getAuth('/admin-manager').subscribe(d => {
      return console.log('getAdminManager: ' + d);
    });
  }

  getAll() {
    this.data.getAuth('/all').subscribe(d => {
      return console.log('getAll: ' + d);
    });
  }

  logout() {
    this.auth.logout();
  }
}
