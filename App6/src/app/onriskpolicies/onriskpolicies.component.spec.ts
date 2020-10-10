import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnriskpoliciesComponent } from './onriskpolicies.component';

describe('OnriskpoliciesComponent', () => {
    let component: OnriskpoliciesComponent;
    let fixture: ComponentFixture<OnriskpoliciesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ OnriskpoliciesComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OnriskpoliciesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
