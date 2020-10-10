import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreriskpoliciesComponent } from './preriskpolicies.component';

describe('PreriskpoliciesComponent', () => {
    let component: PreriskpoliciesComponent;
    let fixture: ComponentFixture<PreriskpoliciesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ PreriskpoliciesComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PreriskpoliciesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
