import { Component } from '@angular/core';

@Component({
  selector: 'user-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

	public hide:boolean = false;

	// Autication User
	user = 'Jorge';

	// Image for the User Autentication
	userImg = 'assets/img/male.jpg';

	authUser() { 

		this.hide = !this.hide;
	}

  	constructor() {}
}
