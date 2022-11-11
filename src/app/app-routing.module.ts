import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardPlayerRankingComponent } from './admin-dashboard-player-ranking/admin-dashboard-player-ranking.component';
import { AdminDashboardTeamRankingComponent } from './admin-dashboard-team-ranking/admin-dashboard-team-ranking.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { AllSeriesComponent } from './all-series/all-series.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlayerinformationComponent } from './playerinformation/playerinformation.component';
import { RankingComponent } from './ranking/ranking.component';
import { AdminLoginGuard } from './services/admin-login.guard';

const routes: Routes = 
[
  { path: 'home', component: HomeComponent, pathMatch: "full" },
  { path: 'allmatches', component: AllMatchesComponent, pathMatch: "full" },
  { path: 'allseries', component: AllSeriesComponent, pathMatch: "full" },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'playerinformation', component: PlayerinformationComponent, pathMatch: "full" },
  { path: 'ranking', component: RankingComponent, pathMatch: "full" },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminLoginGuard],
  children: [
    { path: 'player-ranking', component: AdminDashboardPlayerRankingComponent, },
    { path: 'team-ranking', component: AdminDashboardTeamRankingComponent, },
  ]
},
  { path: '**', redirectTo: 'home', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
