import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerinformationComponent } from './playerinformation.component';

describe('PlayerinformationComponent', () => {
  let component: PlayerinformationComponent;
  let fixture: ComponentFixture<PlayerinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
