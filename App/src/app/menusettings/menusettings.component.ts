import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
	selector: 'menusettings-page',
	templateUrl: './menusettings.component.html',
	styleUrls: ['./menusettings.component.css']
})
export class MenusettingsComponent {
	isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

    gridheads: any;
    gridbodies: any;

	constructor(private breakpointObserver: BreakpointObserver) { 

        this.gridheads = [

            { classNum: 1, name: 'Name' },
            { classNum: 2, name: 'Description' },
            { classNum: 3, name: 'Url' },
            { classNum: 4, name: 'Icon' },
            { classNum: 5, name: 'Is Disable' },
            { classNum: 6, name: '' },
            { classNum: 7, name: '' },
            { classNum: 8, name: '' },
            { classNum: 9, name: '' },
            { classNum: 10, name: '' },
            { classNum: 11, name: '' },
            { classNum: 12, name: '' }
        ];

        this.gridbodies = [

            { colorClass1: 'tgb-white-color', classNum1: 1, value1: 'Leads', colorClass2: 'tgb-white-color', classNum2: 2, value2: 'Review and Manage all Leads', colorClass3: 'tgb-white-color', classNum3: 3, value3: '/Leads', colorClass4: 'tgb-icogrey-color', classNum4: 4, iconClass: 'fa fa-plus-circle default-1', colorClass5: 'tgb-white-color', classNum5: 5, name1: 'false', colorClass6: 'tgb-white-color', classNum6: 6, name2: '' },
            { colorClass1: 'tgb-grey-color', classNum1: 7, value1: 'Lead Reporting', colorClass2: 'tgb-grey-color', classNum2: 8, value2: 'Capture & Distribution Reports', colorClass3: 'tgb-grey-color', classNum3: 9, value3: '/capture', colorClass4: 'tgb-icogrey-color', classNum4: 10, iconClass: 'fa fa-plus-circle default-2', colorClass5: 'tgb-grey-color', classNum5: 11, name1: 'false', colorClass6: 'tgb-grey-color', classNum6: 12, name2: '' },
            { colorClass1: 'tgb-white-color', classNum1: 13, value1: 'Capture Total', colorClass2: 'tgb-white-color', classNum2: 14, value2: '', colorClass3: 'tgb-white-color', classNum3: 15, value3: '/Reports/CaptureTotals', colorClass4: 'tgb-icogrey-color', classNum4: 16, iconClass: 'fa fa-plus-circle default-3', colorClass5: 'tgb-white-color', classNum5: 17, name1: 'false', colorClass6: 'tgb-white-color', classNum6: 18, name2: '' },
            { colorClass1: 'tgb-grey-color', classNum1: 1, value1: 'Leads', colorClass2: 'tgb-grey-color', classNum2: 2, value2: 'Review and Manage all Leads', colorClass3: 'tgb-grey-color', classNum3: 3, value3: '/Leads', colorClass4: 'tgb-icogrey-color', classNum4: 4, iconClass: 'fa fa-plus-circle default-4', colorClass5: 'tgb-grey-color', classNum5: 5, name1: 'false', colorClass6: 'tgb-grey-color', classNum6: 6, name2: '' },
            { colorClass1: 'tgb-white-color', classNum1: 7, value1: 'Lead Reporting', colorClass2: 'tgb-white-color', classNum2: 8, value2: 'Capture & Distribution Reports', colorClass3: 'tgb-white-color', classNum3: 9, value3: '/capture', colorClass4: 'tgb-icogrey-color', classNum4: 10, iconClass: 'fa fa-plus-circle default-5', colorClass5: 'tgb-white-color', classNum5: 11, name1: 'false', colorClass6: 'tgb-white-color', classNum6: 12, name2: '' },
            { colorClass1: 'tgb-grey-color', classNum1: 13, value1: 'Capture Total', colorClass2: 'tgb-grey-color', classNum2: 14, value2: '', colorClass3: 'tgb-grey-color', classNum3: 15, value3: '/Reports/CaptureTotals', colorClass4: 'tgb-icogrey-color', classNum4: 16, iconClass: 'fa fa-plus-circle default-6', colorClass5: 'tgb-grey-color', classNum5: 17, name1: 'false', colorClass6: 'tgb-grey-color', classNum6: 18, name2: '' },
            { colorClass1: 'tgb-white-color', classNum1: 1, value1: 'Leads', colorClass2: 'tgb-white-color', classNum2: 2, value2: 'Review and Manage all Leads', colorClass3: 'tgb-white-color', classNum3: 3, value3: '/Leads', colorClass4: 'tgb-icogrey-color', classNum4: 4, iconClass: 'fa fa-plus-circle default-1', colorClass5: 'tgb-white-color', classNum5: 5, name1: 'false', colorClass6: 'tgb-white-color', classNum6: 6, name2: '' },
            { colorClass1: 'tgb-grey-color', classNum1: 7, value1: 'Lead Reporting', colorClass2: 'tgb-grey-color', classNum2: 8, value2: 'Capture & Distribution Reports', colorClass3: 'tgb-grey-color', classNum3: 9, value3: '/capture', colorClass4: 'tgb-icogrey-color', classNum4: 10, iconClass: 'fa fa-plus-circle default-2', colorClass5: 'tgb-grey-color', classNum5: 11, name1: 'false', colorClass6: 'tgb-grey-color', classNum6: 12, name2: '' },
            { colorClass1: 'tgb-white-color', classNum1: 13, value1: 'Capture Total', colorClass2: 'tgb-white-color', classNum2: 14, value2: '', colorClass3: 'tgb-white-color', classNum3: 15, value3: '/Reports/CaptureTotals', colorClass4: 'tgb-icogrey-color', classNum4: 16, iconClass: 'fa fa-plus-circle default-3', colorClass5: 'tgb-white-color', classNum5: 17, name1: 'false', colorClass6: 'tgb-white-color', classNum6: 18, name2: '' },
            { colorClass1: 'tgb-grey-color', classNum1: 1, value1: 'Leads', colorClass2: 'tgb-grey-color', classNum2: 2, value2: 'Review and Manage all Leads', colorClass3: 'tgb-grey-color', classNum3: 3, value3: '/Leads', colorClass4: 'tgb-icogrey-color', classNum4: 4, iconClass: 'fa fa-plus-circle default-4', colorClass5: 'tgb-grey-color', classNum5: 5, name1: 'false', colorClass6: 'tgb-grey-color', classNum6: 6, name2: '' },
            { colorClass1: 'tgb-white-color', classNum1: 7, value1: 'Lead Reporting', colorClass2: 'tgb-white-color', classNum2: 8, value2: 'Capture & Distribution Reports', colorClass3: 'tgb-white-color', classNum3: 9, value3: '/capture', colorClass4: 'tgb-icogrey-color', classNum4: 10, iconClass: 'fa fa-plus-circle default-5', colorClass5: 'tgb-white-color', classNum5: 11, name1: 'false', colorClass6: 'tgb-white-color', classNum6: 12, name2: '' },
            { colorClass1: 'tgb-grey-color', classNum1: 13, value1: 'Capture Total', colorClass2: 'tgb-grey-color', classNum2: 14, value2: '', colorClass3: 'tgb-grey-color', classNum3: 15, value3: '/Reports/CaptureTotals', colorClass4: 'tgb-icogrey-color', classNum4: 16, iconClass: 'fa fa-plus-circle default-6', colorClass5: 'tgb-grey-color', classNum5: 17, name1: 'false', colorClass6: 'tgb-grey-color', classNum6: 18, name2: '' }
        ]

	};

	ngAfterViewInit() {

		$.getScript('assets/js/menusettings.js');
	}
}
