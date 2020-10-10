
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturetotalsComponent } from './capturetotals.component';

describe('CapturetotalsComponent', () => {
    let component: CapturetotalsComponent;
    let fixture: ComponentFixture<CapturetotalsComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ CapturetotalsComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(CapturetotalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
