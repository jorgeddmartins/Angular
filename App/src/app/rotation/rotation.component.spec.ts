
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationComponent } from './rotation.component';

describe('RotationComponent', () => {
    let component: RotationComponent;
    let fixture: ComponentFixture<RotationComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ RotationComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(RotationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
