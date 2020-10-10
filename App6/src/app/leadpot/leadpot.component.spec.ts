import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadpotComponent } from './leadpot.component';

describe('LeadpotComponent', () => {
    let component: LeadpotComponent;
    let fixture: ComponentFixture<LeadpotComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ LeadpotComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LeadpotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
