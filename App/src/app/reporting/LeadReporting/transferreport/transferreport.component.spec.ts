
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferreportComponent } from './transferreport.component';

describe('TransferreportComponent', () => {
    let component: TransferreportComponent;
    let fixture: ComponentFixture<TransferreportComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ TransferreportComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(TransferreportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
