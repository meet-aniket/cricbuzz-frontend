import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { batsmen } from './batsmen';
import { Teams } from './Teams';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }

  gettestbatsmen(): Observable<batsmen[]> {
    return this.http.get<batsmen[]>("http://localhost:8100/test/batting/getall");
  }
  getodibatsmen(): Observable<batsmen[]> {
    return this.http.get<batsmen[]>("http://localhost:8100/odi/batting/getall");
  }
  gett20batsmen(): Observable<batsmen[]> {
    return this.http.get<batsmen[]>("http://localhost:8100/t20/batting/getall");
  }
  gettestbowler(): Observable<batsmen[]> {
    return this.http.get<batsmen[]>("http://localhost:8100/test/bowl/getall");
  }
  getodibowler(): Observable<batsmen[]> {
    return this.http.get<batsmen[]>("http://localhost:8100/odi/bowl/getall");
  }
  gett20bowler(): Observable<batsmen[]> {
    return this.http.get<batsmen[]>("http://localhost:8100/t20/bowl/getall");
  }
  gettestall(): Observable<batsmen[]> {
    return this.http.get<batsmen[]>("http://localhost:8100/test/allrounder/getall");
  }
  getodiall(): Observable<batsmen[]> {
    return this.http.get<batsmen[]>("http://localhost:8100/odi/allrounder/getall");
  }
  gett20all(): Observable<batsmen[]> {
    return this.http.get<batsmen[]>("http://localhost:8100/t20/allrounder/getall");
  }
  gettestteam(): Observable<Teams[]> {
    return this.http.get<Teams[]>("http://localhost:8100/team/test/getall");
  }
  getoditeam(): Observable<Teams[]> {
    return this.http.get<Teams[]>("http://localhost:8100/team/odi/getall");
  }
  gett20team(): Observable<Teams[]> {
    return this.http.get<Teams[]>("http://localhost:8100/team/t20/getall");
  }
  updatetestteam(ranking: any, teamName: any, ratings: any, points: any) {
    var updateTestTeam = {
      ranking: ranking,
      teamName: teamName,
      ratings: ratings,
      points: points
    }
    return this.http.put<any>(`http://localhost:8100/team/test/update`, updateTestTeam);
  }
  updateoditeam(ranking: any, teamName: any, ratings: any, points: any) {
    var updateOdiTeam = {
      ranking: ranking,
      teamName: teamName,
      ratings: ratings,
      points: points
    }
    console.log(updateOdiTeam)
    return this.http.put<any>(`http://localhost:8100/team/odi/update`, updateOdiTeam);
  }
  updatet20team(ranking: any, teamName: any, ratings: any, points: any) {
    var updateT20Team = {
      ranking: ranking,
      teamName: teamName,
      ratings: ratings,
      points: points
    }
    return this.http.put<any>(`http://localhost:8100/team/t20/update`, updateT20Team);
  }
  updatetestbat(ranking: any, name: any, points: any, team: any) {
    var updateTestBatTeam = {
      ranking: ranking,
      name: name,
      points: points,
      team: team
    }
    return this.http.put<any>(`http://localhost:8100/test/batting/update`, updateTestBatTeam);
  }
  updatetestball(ranking: any, name: any, points: any, team: any) {
    var updateTestBallTeam = {
      ranking: ranking,
      name: name,
      points: points,
      team: team
    }
    return this.http.put<any>(`http://localhost:8100/test/bowl/update`, updateTestBallTeam);
  }
  updatetestall(ranking: any, name: any, points: any, team: any) {
    var updateTestAllTeam = {
      ranking: ranking,
      name: name,
      points: points,
      team: team
    }
    return this.http.put<any>(`http://localhost:8100/test/allrounder/update`, updateTestAllTeam);
  }
  updateodibat(ranking: any, name: any, points: any, team: any) {
    var updateOdiBatTeam = {
      ranking: ranking,
      name: name,
      points: points,
      team: team
    }
    return this.http.put<any>(`http://localhost:8100/odi/batting/update`, updateOdiBatTeam);
  }
  updateodiball(ranking: any, name: any, points: any, team: any) {
    var updateOdiBallTeam = {
      ranking: ranking,
      name: name,
      points: points,
      team: team
    }
    return this.http.put<any>(`http://localhost:8100/odi/bowl/update`, updateOdiBallTeam);
  }
  updateodiall(ranking: any, name: any, points: any, team: any) {
    var updateOdiAllTeam = {
      ranking: ranking,
      name: name,
      points: points,
      team: team
    }
    return this.http.put<any>(`http://localhost:8100/odi/allrounder/update`, updateOdiAllTeam);
  }
  updatet20bat(ranking: any, name: any, points: any, team: any) {
    var updateT20BatTeam = {
      ranking: ranking,
      name: name,
      points: points,
      team: team
    }
    return this.http.put<any>(`http://localhost:8100/t20/batting/update`, updateT20BatTeam);
  }
  updatet20ball(ranking: any, name: any, points: any, team: any) {
    var updateT20BallTeam = {
      ranking: ranking,
      name: name,
      points: points,
      team: team
    }
    return this.http.put<any>(`http://localhost:8100/t20/bowl/update`, updateT20BallTeam);
  }
  updatet20all(ranking: any, name: any, points: any, team: any) {
    var updateT20AllTeam = {
      ranking: ranking,
      name: name,
      points: points,
      team: team
    }
    return this.http.put<any>(`http://localhost:8100/t20/allrounder/update`, updateT20AllTeam);
  }



  deleteElementTestBatService(ranking: number) {
    return this.http.delete(`http://localhost:8100/test/batting/delete/${ranking}`);
  }
  deleteElementTestBowlService(ranking: number) {
    return this.http.delete(`http://localhost:8100/test/bowl/delete/${ranking}`);
  }
  deleteElementTestAllService(ranking: number) {
    return this.http.delete(`http://localhost:8100/test/allrounder/delete/${ranking}`);
  }
  deleteElementOdiBatService(ranking: number) {
    return this.http.delete(`http://localhost:8100/odi/batting/delete/${ranking}`);
  }
  deleteElementOdiBowlService(ranking: number) {
    return this.http.delete(`http://localhost:8100/odi/bowl/delete/${ranking}`);
  }
  deleteElementOdiAllService(ranking: number) {
    return this.http.delete(`http://localhost:8100/odi/allrounder/delete/${ranking}`);
  }
  deleteElementT20BatService(ranking: number) {
    return this.http.delete(`http://localhost:8100/t20/batting/delete/${ranking}`);
  }
  deleteElementT20BowlService(ranking: number) {
    return this.http.delete(`http://localhost:8100/t20/bowl/delete/${ranking}`);
  }
  deleteElementT20AllService(ranking: number) {
    return this.http.delete(`http://localhost:8100/t20/allrounder/delete/${ranking}`);
  }



  deleteElementTestBatServiceAll() {
    return this.http.delete(`http://localhost:8100/test/batting/deletall/`);
  }
  deleteElementTestBowlServiceAll() {
    return this.http.delete(`http://localhost:8100/test/bowl/deletall`);
  }
  deleteElementTestAllServiceAll() {
    return this.http.delete(`http://localhost:8100/test/allrounder/deletall`);
  }
  deleteElementOdiBatServiceAll() {
    return this.http.delete(`http://localhost:8100/odi/batting/deletall`);
  }
  deleteElementOdiBowlServiceAll() {
    return this.http.delete(`http://localhost:8100/odi/bowl/deletall`);
  }
  deleteElementOdiAllServiceAll() {
    return this.http.delete(`http://localhost:8100/odi/allrounder/deletall`);
  }
  deleteElementT20BatServiceAll() {
    return this.http.delete(`http://localhost:8100/t20/batting/deletall`);
  }
  deleteElementT20BowlServiceAll() {
    return this.http.delete(`http://localhost:8100/t20/bowl/delete/deletall`);
  }
  deleteElementT20AllServiceAll() {
    return this.http.delete(`http://localhost:8100/t20/allrounder/deletall`);
  }



  deleteElementTestTeamService(ranking: number) {
    return this.http.delete(`http://localhost:8100/team/test/delete/${ranking}`);
  }
  deleteElementOdiTeamService(ranking: number) {
    return this.http.delete(`http://localhost:8100/team/odi/delete/${ranking}`);
  }
  deleteElementT20TeamService(ranking: number) {
    return this.http.delete(`http://localhost:8100/team/t20/delete/${ranking}`);
  }



  deleteElementTestTeamServiceAll() {
    return this.http.delete(`http://localhost:8100/team/test/deletall/`);
  }
  deleteElementOdiTeamServiceAll() {
    return this.http.delete(`http://localhost:8100/team/odi/deletall/`);
  }
  deleteElementT20TeamServiceAll() {
    return this.http.delete(`http://localhost:8100/team/t20/deletall/`);
  }
}
