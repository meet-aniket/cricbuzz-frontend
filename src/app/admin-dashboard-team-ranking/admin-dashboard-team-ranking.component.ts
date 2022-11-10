import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RankingService } from '../services/ranking.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-admin-dashboard-team-ranking',
  templateUrl: './admin-dashboard-team-ranking.component.html',
  styleUrls: ['./admin-dashboard-team-ranking.component.css']
})
export class AdminDashboardTeamRankingComponent implements OnInit {

  test: boolean = true;
  ODI: boolean = false;
  T20: boolean = false;
  testteam!: MatTableDataSource<any>;
  oditeam!: MatTableDataSource<any>;
  t20team!: MatTableDataSource<any>;
  constructor(private service: RankingService) { }
  displayedTeams: String[] = ['ranking', 'teamName', 'points', 'ratings', 'editTeam', 'delete']
  ngOnInit(): void {
    this.check5();

    this.service.gettestteam().subscribe((resp) => {
      this.testteam = new MatTableDataSource(resp);
    })

    this.service.getoditeam().subscribe((resp) => {
      this.oditeam = new MatTableDataSource(resp);
    })

    this.service.gett20team().subscribe((resp) => {
      this.t20team = new MatTableDataSource(resp);
    })
  }
  gettestteam() {
    this.service.gettestteam().subscribe((resp) => {
      this.testteam = new MatTableDataSource(resp);

    })
  }
  getoditeam() {
    this.service.getoditeam().subscribe((resp) => {
      this.oditeam = new MatTableDataSource(resp);

    })
  }
  gett20team() {
    this.service.gett20team().subscribe((resp) => {
      this.t20team = new MatTableDataSource(resp);

    })
  }

  colorF1!: any;
  colorF2!: any;
  colorF3!: any;

  check5() {
    this.colorF1 = "rgb(166, 255, 0)";
    this.colorF2 = "";
    this.colorF3 = "";
    this.test = true;
    this.ODI = false;
    this.T20 = false;
    this.gettestteam();
  }
  check6() {
    this.colorF2 = "rgb(166, 255, 0)";
    this.colorF1 = "";
    this.colorF3 = "";
    this.test = false;
    this.ODI = true;
    this.T20 = false;
    this.getoditeam();
  }
  check7() {
    this.colorF3 = "rgb(166, 255, 0)";
    this.colorF2 = "";
    this.colorF1 = "";
    this.test = false;
    this.ODI = false;
    this.T20 = true;
    this.gett20team();
  }

  onSubmitTest(ranking: any, teamName: any, ratings: any, points: any) {
      if(String(ranking).trim()=='' || String(ranking)==null)
      {
        alert("Please Enter Rank");
        return;
      }
      this.service.updatetestteam(ranking, teamName, ratings, points).subscribe(
        (resp) => {this.check5(); alert("Update Test Team Successful");},
        (error)=>{alert("Internal Server Error")})
  }
  onSubmitODI(ranking: any, teamName: any, ratings: any, points: any) {
      if(String(ranking).trim()=='' || String(ranking)==null)
      {
        alert("Please Enter Rank");
        return;
      }
      this.service.updateoditeam(ranking, teamName, ratings, points).subscribe(
        (resp) => { this.check6(); alert("Update ODI Team Successful"); },
        (error)=>{alert("Internal Server Error")})
  }
  onSubmitT20(ranking: any, teamName: any, ratings: any, points: any) {
      if(String(ranking).trim()=='' || String(ranking)==null)
      {
        alert("Please Enter Rank");
        return;
      }
      this.service.updatet20team(ranking, teamName, ratings, points).subscribe(
        (resp) => { this.check7(); alert("Update T20 Team Successful"); },
        (error)=>{alert("Internal Server Error")})
  }


  addElementTestTeam() {
    var i;
    for (i = 0; i < this.testteam?.data?.length; i++) {
      if (this.testteam?.data[i].ranking != i + 1) {
        break;
      }
    }
    var newRow = { name: "", points: "", ranking: i + 1, team: "" };
    this.testteam.data.push(newRow)
    this.testteam = new MatTableDataSource(this.testteam.data);
  }
  addElementOdiTeam() {
    var i;
    for (i = 0; i < this.oditeam?.data?.length; i++) {
      if (this.oditeam?.data[i].ranking != i + 1) {
        break;
      }
    }
    var newRow = { name: "", points: "", ranking: i + 1, team: "" };
    this.oditeam.data.push(newRow)
    this.oditeam = new MatTableDataSource(this.oditeam.data);
  }
  addElementT20Team() {
    var i;
    for (i = 0; i < this.t20team?.data?.length; i++) {
      if (this.t20team?.data[i].ranking != i + 1) {
        break;
      }
    }
    var newRow = { name: "", points: "", ranking: i + 1, team: "" };
    this.t20team.data.push(newRow)
    this.t20team = new MatTableDataSource(this.t20team.data);
  }
  deleteElementTestTeam(ranking: any) {
    this.service.deleteElementTestTeamService(ranking).subscribe(
      (resp) => { this.check5(); alert("Deleted Test Team Successful"); },
      (error) => { alert("Internal Server Error"); console.log(error) })
  }
  deleteElementOdiTeam(ranking: any) {
    this.service.deleteElementOdiTeamService(ranking).subscribe(
      (resp) => { this.check6(); alert("Deleted Odi Team Successful"); },
      (error) => { alert("Internal Server Error"); console.log(error) })
  }
  deleteElementT20Team(ranking: any) {
    this.service.deleteElementT20TeamService(ranking).subscribe(
      (resp) => { this.check7(); alert("Deleted T20 Team Successful"); },
      (error) => { alert("Internal Server Error"); console.log(error) })
  }
  deleteElementTestTeamAll() {
    this.service.deleteElementTestTeamServiceAll().subscribe(
      (resp) => { this.check5(); alert("Deleted All Test Team Successful"); },
      (error) => { alert("Internal Server Error"); console.log(error) })
  }
  deleteElementOdiTeamAll() {
    this.service.deleteElementOdiTeamServiceAll().subscribe(
      (resp) => { this.check6(); alert("Deleted All Odi Team Successful"); },
      (error) => { alert("Internal Server Error"); console.log(error) })
  }
  deleteElementT20TeamAll() {
    this.service.deleteElementT20TeamServiceAll().subscribe(
      (resp) => { this.check7(); alert("Deleted All T20 Team Successful"); },
      (error) => { alert("Internal Server Error"); console.log(error) })
  }
}
