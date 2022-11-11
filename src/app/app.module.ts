import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import {HttpClientModule} from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatIconModule} from '@angular/material/icon';
import { AllSeriesComponent } from './all-series/all-series.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlayerinformationComponent } from './playerinformation/playerinformation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardTeamRankingComponent } from './admin-dashboard-team-ranking/admin-dashboard-team-ranking.component';
import { AdminDashboardPlayerRankingComponent } from './admin-dashboard-player-ranking/admin-dashboard-player-ranking.component';
import { RankingComponent } from './ranking/ranking.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    AllMatchesComponent,
    AllSeriesComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    PlayerinformationComponent,
    AdminDashboardComponent,
    AdminDashboardTeamRankingComponent,
    AdminDashboardPlayerRankingComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    NgImageSliderModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
