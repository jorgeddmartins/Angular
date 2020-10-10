import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleuserreportComponent } from './teleuserreport.component';

describe('TeleuserreportComponent', () => {
    let component: TeleuserreportComponent;
    let fixture: ComponentFixture<TeleuserreportComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ TeleuserreportComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeleuserreportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

      it('should create', () => {
        expect(component).toBeTruthy();
    });
});
