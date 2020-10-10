import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresavepoliciesComponent } from './presavepolicies.component';

describe('PresavepoliciesComponent', () => {
    let component: PresavepoliciesComponent;
    let fixture: ComponentFixture<PresavepoliciesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ PresavepoliciesComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PresavepoliciesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
