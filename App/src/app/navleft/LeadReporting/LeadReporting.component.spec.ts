
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadreportingComponent } from './LeadReporting.component';

describe('LeadreportingComponent', () => {
    let component: LeadreportingComponent;
    let fixture: ComponentFixture<LeadreportingComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ LeadreportingComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(LeadreportingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
