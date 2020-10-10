
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadvolumereportComponent } from './leadvolumereport.component';

describe('LeadvolumereportComponent', () => {
    let component: LeadvolumereportComponent;
    let fixture: ComponentFixture<LeadvolumereportComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ LeadvolumereportComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(LeadvolumereportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
