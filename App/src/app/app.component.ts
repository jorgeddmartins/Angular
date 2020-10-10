import { Component } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'app';

  	ngAfterViewInit() {

        $.fn.AppContainer = function(appB, appOption) {

            let appDefault = {

                appBlk: true
            };

            let appSettings = $.extend( true, {}, appDefault, appOption );

            // Remove All Aplication(CRM)
            const AppBlk = appSettings.appBlk == false ? appB.detach() : '';
        }
        $(document).AppContainer($('#AppBlk'));
	}
}