import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.userService.getUserById(1).subscribe(user => {
      this.user = user;
    });
  }

  editProfile(): void {
    console.log('Editing profile');
    // Implement profile editing logic here
  }

}
