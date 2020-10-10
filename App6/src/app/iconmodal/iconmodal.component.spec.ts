import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconmodalComponent } from './iconmodal.component';

describe('NewsComponent', () => {
    let component: IconmodalComponent;
    let fixture: ComponentFixture<IconmodalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ IconmodalComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconmodalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
