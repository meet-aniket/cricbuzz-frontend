import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardTeamRankingComponent } from './admin-dashboard-team-ranking.component';

describe('AdminDashboardTeamRankingComponent', () => {
  let component: AdminDashboardTeamRankingComponent;
  let fixture: ComponentFixture<AdminDashboardTeamRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardTeamRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardTeamRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
