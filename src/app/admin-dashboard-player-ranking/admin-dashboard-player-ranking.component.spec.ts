import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardPlayerRankingComponent } from './admin-dashboard-player-ranking.component';

describe('AdminDashboardPlayerRankingComponent', () => {
  let component: AdminDashboardPlayerRankingComponent;
  let fixture: ComponentFixture<AdminDashboardPlayerRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardPlayerRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardPlayerRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
