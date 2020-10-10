import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'policies-page',
  	templateUrl: './policies.component.html'
  	// styleUrls: ['./home.component.css']
})
export class PoliciesComponent implements OnInit {

	detacosts: object = {};

	constructor() { 

		this.detacosts = [

			{ name: '', classMain: 'CostDetInpt marginL', type: 'text', placeholder: 'Customer 1' },
			{ name: '', classMain: 'CostDetInpt', type: 'text', placeholder: 'Customer 2' },
			{ name: '', classMain: 'CostDetInpt', type: 'text', placeholder: 'Customer 3' },
			{ name: '', classMain: 'CostDetInpt marginR', type: 'text', placeholder: 'Customer 4' },
			{ name: '', classMain: 'CostDetInpt marginL', type: 'text', placeholder: 'Customer 5' },
			{ name: '', classMain: 'CostDetInpt', type: 'text', placeholder: 'Customer 6' },
			{ name: '', classMain: 'CostDetInpt', type: 'text', placeholder: 'Customer 7' },
			{ name: '', classMain: 'CostDetInpt marginR', type: 'text', placeholder: 'Customer 8' }
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {

		;( function (document, window, index) {

			let inputs = document.querySelectorAll('.inputfile');
			Array.prototype.forEach.call( inputs, function(input) {

				let label	 = input.nextElementSibling,
					labelVal = label.innerHTML;

				input.addEventListener('change', function(e) {
					let fileName = '';
					if(this.files && this.files.length > 1)
						fileName = (this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
					else
						fileName = e.target.value.split('\\').pop();

					if(fileName)
						label.querySelector('span').innerHTML = fileName;
					else
						label.innerHTML = labelVal;
				});

				// Firefox bug fix
				input.addEventListener('focus', function() { input.classList.add('has-focus'); });
				input.addEventListener('blur', function() { input.classList.remove('has-focus'); });
			});

		}( document, window, 0 ));


		$.getScript('assets/js/policies.js');
	}

}
