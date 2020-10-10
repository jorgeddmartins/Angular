
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlycapturereportComponent } from './hourlycapturereport.component';

describe('HourlycapturereportComponent', () => {
    let component: HourlycapturereportComponent;
    let fixture: ComponentFixture<HourlycapturereportComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ HourlycapturereportComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(HourlycapturereportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
