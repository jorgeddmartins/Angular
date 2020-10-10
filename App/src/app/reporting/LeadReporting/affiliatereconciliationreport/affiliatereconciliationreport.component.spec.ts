
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatereconciliationreportComponent } from './affiliatereconciliationreport.component';

describe('AffiliatereconciliationreportComponent', () => {
    let component: AffiliatereconciliationreportComponent;
    let fixture: ComponentFixture<AffiliatereconciliationreportComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ AffiliatereconciliationreportComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(AffiliatereconciliationreportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
