import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleadsComponent } from './myleads.component';

describe('MyleadsComponent', () => {
    let component: MyleadsComponent;
    let fixture: ComponentFixture<MyleadsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ MyleadsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyleadsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
