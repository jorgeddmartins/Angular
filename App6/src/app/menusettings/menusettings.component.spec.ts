import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusettingsComponent } from './menusettings.component';

describe('MenusettingsComponent', () => {
    let component: MenusettingsComponent;
    let fixture: ComponentFixture<MenusettingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ MenusettingsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenusettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
