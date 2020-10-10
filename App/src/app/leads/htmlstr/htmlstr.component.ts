import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'htmlstr-page',
	templateUrl: './htmlstr.component.html'
})
export class HtmlstrComponent implements OnInit {

	globals: object = {};
	oneboards: object = {};
	twoboards: object = {};
	rejections: object = {};

	constructor() { 

		this.globals = [
			{ 
				classWidth: 5 
			},
			{ 
				classWidth: 7 
			}
		];
		this.oneboards = [
			{
				topclass: 'form-article-sm ProductType',
				label: 'Product Type',
				id: 'ProductType',
				name: 'ProductType',
				type: 'text',
				value: 'Life'
			},
			{
				topclass: 'form-article-sm IPLabel',
				label: 'I.P. Address',
				id: 'IPLabel',
				name: 'IPLabel',
				type: 'text',
				value: '51.254.209.128'
			},
			{
				topclass: 'form-article-sm OriginID',
				label: 'Origin ID',
				id: 'OriginID',
				name: 'OriginID',
				type: 'text',
				value: 0
			},
			{
				topclass: 'form-article-sm Platform',
				label: 'Platform',
				id: 'Platform',
				name: 'Platform',
				type: 'text',
				value: ''
			},
			{
				topclass: 'form-article-sm EmailId',
				label: 'EmailId',
				id: 'EmailId',
				name: 'EmailId',
				type: 'text',
				value: 'unknown'
			},
			{
				topclass: 'form-article-sm EmailSource',
				label: 'Email Source',
				id: 'EmailSource',
				name: 'EmailSource',
				type: 'text',
				value: ''
			}
		];
		this.twoboards = [
			{
				topclass: 'form-article-xs',
				label: 'Title',
				id: 'Title',
				name: 'Title',
				type: 'text',
				value: 'Mr'
			},
			{
				topclass: 'form-article-xs',
				label: 'Gender',
				id: 'Gender',
				name: 'Gender',
				type: 'text',
				value: 'Male'
			},
			{
				topclass: 'form-article-xss',
				label: 'First Name',
				id: 'Firstname',
				name: 'Firstname',
				type: 'text',
				value: 'Craig'
			},
			{
				topclass: 'form-article-xss',
				label: 'Last Name',
				id: 'Lastname',
				name: 'Lastname',
				type: 'text',
				value: 'Denton'
			},
			{
				topclass: 'form-article-semiblk sdob birthForm',
				label: 'Date of Birth',
				id: 'DateOfBirth',
				name: 'DateOfBirth',
				type: 'text',
				inClass: 'datepicker DateOfBirth',
				value: ''
			},
			{
				topclass: 'form-article-smlg',
				label: 'Email',
				id: 'Email',
				name: 'Email',
				type: 'email',
				value: 'craigdenton71@gmail.com'
			},
			{
				topclass: 'form-article-semiblk increase-mob',
				label: 'Landline',
				id: 'LandlinePhone',
				name: 'LandlinePhone',
				type: 'text',
				value: '07527866660'
			},
			{
				topclass: 'form-article-xss-87 MobField',
				label: 'Mobile',
				id: 'MobilePhone',
				name: 'MobilePhone',
				type: 'text',
				value: '07527866660'
			}
		];
		this.rejections = [

			{
				name: 'Fake Name'
			},
			{
				name: 'Incentivised'
			},
			{
				name: 'Incorrect Age'
			},
			{
				name: 'Invalid Criteria'
			},
			{
				name: 'Invalid Phone Number'
			},
			{
				name: 'Never Applied'
			},
			{
				name: 'Obvious Hoax'
			},
			{
				name: 'Over Quota'
			},
			{
				name: 'Test Lead'
			},
			{
				name: 'Wrong Product: Car Insurance'
			},
			{
				name: 'Wrong Product: Health Insurance'
			},
			{
				name: 'Wrong Product: Income Protection'
			},
			{
				name: 'Wrong Product: Life Insurance'
			},
			{
				name: 'Wrong Product: Other'
			},
			{
				name: 'Wrong Product: Pet Insurance'
			},
			{
				name: 'Wrong Product: Travel Insurance'
			}
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {}

}
