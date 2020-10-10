import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'backqueue-page',
  	templateUrl: './backqueue.component.html'
  	// styleUrls: ['./home.component.css']
})
export class BackqueueComponent implements OnInit {

    searchPickers: object = {};

    searchDrops: object = {};

    topButtons: object = {};

    packgrids: object = {};

    topPolicies: object = {};

	constructor() {

        this.searchPickers = [

            {
                label: 'From',
                class: 'datePickerFromPack',
                id: 'datePickerFromPack'
            },
            {
                label: 'To',
                class: 'datePickerToPack',
                id: 'datePickerToPack'
            }
        ],

        this.searchDrops = [

            {
                option: 'Today'
            },
            {
                option: 'Yesterday'
            },
            {
                option: 'Last 7 days'
            },
            {
                option: 'Current month'
            },
            {
                option: 'Last month'
            },
            {
                option: 'This quarter'
            },
            {
                option: 'Last quarter'
            }
        ],

        this.topButtons = [

            {
                class: 'top_Btn CurrentBtnSelected',
                name: 'Pending Packs'
            },
            {
                class: 'top_Btn',
                name: 'Pending Cashbacks'
            },
            {
                class: 'top_Btn',
                name: 'Pending Vouchers'
            },

            {
                class: 'paddL CurrentBtnSelected searchBtn',
                name: 'Get Data'
            },
            {
                class: 'paddL undoBtn',
                name: 'Reset'
            }
        ],

        this.packgrids = [

            {
                name: ''
            },
            {
                name: 'CRM Id'
            },
            {
                name: 'Policy No'
            },
            {
                name: 'Sale Date'
            },
            {
                name: 'Policy Status'
            },
            {
                name: 'Client'
            },
            {
                name: 'Pack Sent Date'
            }
        ],

        this.topPolicies = [

            {
                name: 'Policy Id',
                result: '1006496'
            },
            {
                name: 'Sold By',
                result: 'SmarterCover Admin'
            },
            {
                name: 'Sold On',
                result: '09/07/2019'
            },
            {
                name: 'Sold Status',
                result: 'Referred'
            }
        ]

    }

	ngOnInit() { }

	ngAfterViewInit() {

        $.getScript('assets/js/backqueue/backQCalendar.js');

        $.getScript('assets/js/backqueue/backqueue.js');

        //$.getScript('assets/js/backqueue/backqueue.plugin.js');
	}

}
