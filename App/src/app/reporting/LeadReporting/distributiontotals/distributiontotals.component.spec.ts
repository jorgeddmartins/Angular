
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributiontotalsComponent } from './distributiontotals.component';

describe('DistributiontotalsComponent', () => {
    let component: DistributiontotalsComponent;
    let fixture: ComponentFixture<DistributiontotalsComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ DistributiontotalsComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(DistributiontotalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
