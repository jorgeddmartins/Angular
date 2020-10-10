import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { popupsComponent } from './popups.component';

describe('popupsComponent', () => {
    let component: popupsComponent;
    let fixture: ComponentFixture<popupsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ popupsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(popupsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
