
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconmodalComponent } from './iconmodal.component';

describe('IconmodalComponent', () => {
    let component: IconmodalComponent;
    let fixture: ComponentFixture<IconmodalComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ IconmodalComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(IconmodalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
