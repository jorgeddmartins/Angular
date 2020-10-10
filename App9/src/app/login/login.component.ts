import { Component } from '@angular/core';

declare var $: any;

@Component({

  	selector: 'login-app',

  	templateUrl: './login.component.html',

  	styleUrls: ['./login.component.scss']

})
export class LoginComponent {

  	constructor() {}

	ngAfterViewInit() {

		$.getScript('assets/js/login/js/login.js');
	}

}
