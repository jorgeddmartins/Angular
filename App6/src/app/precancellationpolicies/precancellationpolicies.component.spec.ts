import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecancellationpoliciesComponent } from './precancellationpolicies.component';

describe('PrecancellationpoliciesComponent', () => {
    let component: PrecancellationpoliciesComponent;
    let fixture: ComponentFixture<PrecancellationpoliciesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ PrecancellationpoliciesComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PrecancellationpoliciesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
