import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingsectionComponent } from './fishingsection.component';

describe('FishingsectionComponent', () => {
    let component: FishingsectionComponent;
    let fixture: ComponentFixture<FishingsectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ FishingsectionComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FishingsectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
