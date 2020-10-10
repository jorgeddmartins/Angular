import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'iconmodal-page',
  	templateUrl: './iconmodal.component.html'
  	// styleUrls: ['./home.component.css']
})
export class IconmodalComponent implements OnInit {

	iconmenuTitle: string;
	dropfonts: any;
	icomoons: any;

	constructor() {

		this.iconmenuTitle = 'Icon Menu Settings';

		this.dropfonts = [

            { mainClass: 'drop opt-awesome', fontName: 'Font Awesome 4.7' },
            { mainClass: 'drop opt-awesome5', fontName: 'Font Awesome 5.0.13' },
            { mainClass: 'drop opt-other', fontName: 'Bootstrap Glyphicons 3.2.2' },
            { mainClass: 'drop opt-found', fontName: 'Foundation 3.0.0' },
            { mainClass: 'icoM', fontName: 'IcoMoon' }
        ];

        this.icomoons = [

            { mainClass: 'drop subDrop opt-icomoom', fontName: 'IcoMoon Free Linearicons' },
            // { mainClass: 'drop subDrop opt-linearico', fontName: 'Linearicons Premium' },
            { mainClass: 'drop subDrop opt-icomoonessential', fontName: 'IcoMoon Essential Pack' }
        ]
	}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/icomodal/iconmodal.js');
		$.getScript('assets/js/icomodal/modalFunc.js');
	}

}
