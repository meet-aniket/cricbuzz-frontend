import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-admin-dashboard-player-ranking',
  templateUrl: './admin-dashboard-player-ranking.component.html',
  styleUrls: ['./admin-dashboard-player-ranking.component.css']
})
export class AdminDashboardPlayerRankingComponent implements OnInit {

  Batsman: boolean = false;
  Bowler: boolean = false;
  Allrounder: boolean = false;
  test: boolean = true;
  ODI: boolean = false;
  T20: boolean = false;
  testbat!: MatTableDataSource<any>;
  odibat!: MatTableDataSource<any>;
  t20bat!: MatTableDataSource<any>;
  testbowl!: MatTableDataSource<any>;
  odibowl!: MatTableDataSource<any>;
  t20bowl!: MatTableDataSource<any>;
  testall!: MatTableDataSource<any>;
  odiall!: MatTableDataSource<any>;
  t20all!: MatTableDataSource<any>;


  constructor(private service: RankingService) { }

  displayedPlayers: string[] = ['ranking', 'name', 'teamName', 'points', 'edit', 'delete'];

  ngOnInit(): void {
    this.check1();
    this.check5();

    this.service.gettestbatsmen().subscribe((resp) => {
      this.testbat = new MatTableDataSource(resp);
    })

    this.service.getodibatsmen().subscribe((resp) => {
      this.odibat = new MatTableDataSource(resp);
    })

    this.service.gett20batsmen().subscribe((resp) => {
      this.t20bat = new MatTableDataSource(resp);
    })

    this.service.gettestbowler().subscribe((resp) => {
      this.testbowl = new MatTableDataSource(resp);
    })

    this.service.getodibowler().subscribe((resp) => {
      this.odibowl = new MatTableDataSource(resp);
    })

    this.service.gett20bowler().subscribe((resp) => {
      this.t20bowl = new MatTableDataSource(resp);
    })

    this.service.gettestall().subscribe((resp) => {
      this.testall = new MatTableDataSource(resp);
    })

    this.service.getodiall().subscribe((resp) => {
      this.odiall = new MatTableDataSource(resp);
    })

    this.service.gett20all().subscribe((resp) => {
      this.t20all = new MatTableDataSource(resp);
    })
  }
  gettestbat() {
    this.service.gettestbatsmen().subscribe((resp) => {
      this.testbat = new MatTableDataSource(resp);
    })
  }
  getOdibat() {
    this.service.getodibatsmen().subscribe((resp) => {
      this.odibat = new MatTableDataSource(resp);

    })
  }
  gett20bat() {
    this.service.gett20batsmen().subscribe((resp) => {
      this.t20bat = new MatTableDataSource(resp);

    })
  }
  gettestbowl() {
    this.service.gettestbowler().subscribe((resp) => {
      this.testbowl = new MatTableDataSource(resp);

    })
  }
  getodibowl() {
    this.service.getodibowler().subscribe((resp) => {
      this.odibowl = new MatTableDataSource(resp);

    })
  }
  gett20bowl() {
    this.service.gett20bowler().subscribe((resp) => {
      this.t20bowl = new MatTableDataSource(resp);

    })
  }
  gettestall() {
    this.service.gettestall().subscribe((resp) => {
      this.testall = new MatTableDataSource(resp);

    })
  }
  getodiall() {
    this.service.getodiall().subscribe((resp) => {
      this.odiall = new MatTableDataSource(resp);

    })
  }
  gett20all() {
    this.service.gett20all().subscribe((resp) => {
      this.t20all = new MatTableDataSource(resp);

    })
  }

  colorH1!: any;
  colorH2!: any;
  colorH3!: any;
  colorF1!: any;
  colorF2!: any;
  colorF3!: any;

  check1() {
    this.colorH1 = "rgb(166, 255, 0)";
    this.colorH2 = "";
    this.colorH3 = "";
    this.gettestbat();
    this.Batsman = true;
    this.Bowler = false;
    this.Allrounder = false;
  }
  check2() {
    this.colorH2 = "rgb(166, 255, 0)";
    this.colorH1 = "";
    this.colorH3 = "";
    this.gettestbowl();
    this.Batsman = false;
    this.Bowler = true;
    this.Allrounder = false;
  }
  check3() {
    this.colorH3 = "rgb(166, 255, 0)";
    this.colorH2 = "";
    this.colorH1 = "";
    this.gettestall();
    this.Batsman = false;
    this.Bowler = false;
    this.Allrounder = true;
  }
  check5() {
    this.colorF1 = "rgb(0, 225, 255)";
    this.colorF2 = "";
    this.colorF3 = "";
    this.test = true;
    this.ODI = false;
    this.T20 = false;
    if (this.Batsman == true) {
      this.gettestbat();
    }
    if (this.Bowler == true) {
      this.gettestbowl();
    }
    if (this.Allrounder == true) {
      this.gettestall();
    }
  }
  check6() {
    this.colorF2 = "rgb(0, 225, 255)";
    this.colorF1 = "";
    this.colorF3 = "";
    this.test = false;
    this.ODI = true;
    this.T20 = false;
    if (this.Batsman == true) {
      this.getOdibat();
    }
    if (this.Bowler == true) {
      this.getodibowl();
    }
    if (this.Allrounder == true) {
      this.getodiall();
    }
  }
  check7() {
    this.colorF3 = "rgb(0, 225, 255)";
    this.colorF2 = "";
    this.colorF1 = "";
    this.test = false;
    this.ODI = false;
    this.T20 = true;
    if (this.Batsman == true) {
      this.gett20bat();
    }
    if (this.Bowler == true) {
      this.gett20bowl();
    }
    if (this.Allrounder == true) {
      this.gett20all();
    }
  }

  onSubmitTestBat(ranking:any, name:any, points:any, team:any)
  {
    if(String(ranking).trim()=='' || String(ranking)==null)
    {
      alert("Please Enter Rank");
      return;
    }
    this.service.updatetestbat(ranking,name,points,team).subscribe(
      (resp) => {this.check5();alert("Update Test Batsman Successful");},
      (error)=>{alert("Internal Server Error")})
  }
  onSubmitTestBall(ranking:any, name:any, points:any, team:any)
  {
    if(String(ranking).trim()=='' || String(ranking)==null)
    {
      alert("Please Enter Rank");
      return;
    }
    this.service.updatetestball(ranking,name,points,team).subscribe(
      (resp) => {this.check5(); alert("Update Test Bowler Successful");},
      (error)=>{alert("Internal Server Error")})
  }
  onSubmitTestAll(ranking:any, name:any, points:any, team:any)
  {
    if(String(ranking).trim()=='' || String(ranking)==null)
    {
      alert("Please Enter Rank");
      return;
    }
    this.service.updatetestall(ranking,name,points,team).subscribe(
      (resp) => {this.check5(); alert("Update Test Allrounder Successful");},
      (error)=>{alert("Internal Server Error")})
  }
  onSubmitODIBat(ranking:any, name:any, points:any, team:any)
  {
    if(String(ranking).trim()=='' || String(ranking)==null)
    {
      alert("Please Enter Rank");
      return;
    }
    this.service.updateodibat(ranking,name,points,team).subscribe(
      (resp) => {this.check6();alert("Update ODI Batsman Successful");},
      (error)=>{alert("Internal Server Error")})
  }
  onSubmitODIBall(ranking:any, name:any, points:any, team:any)
  {
    if(String(ranking).trim()=='' || String(ranking)==null)
    {
      alert("Please Enter Rank");
      return;
    }
    this.service.updateodiball(ranking,name,points,team).subscribe(
      (resp) => {this.check6(); alert("Update ODI Bowler Successful");},
      (error)=>{alert("Internal Server Error")})
  }
  onSubmitODIAll(ranking:any, name:any, points:any, team:any)
  {
    if(String(ranking).trim()=='' || String(ranking)==null)
    {
      alert("Please Enter Rank");
      return;
    }
    this.service.updateodiall(ranking,name,points,team).subscribe(
      (resp) => {this.check6(); alert("Update ODI Allrounder Successful");},
      (error)=>{alert("Internal Server Error")})
  }
  onSubmitT20Bat(ranking:any, name:any, points:any, team:any)
  {
    if(String(ranking).trim()=='' || String(ranking)==null)
    {
      alert("Please Enter Rank");
      return;
    }
    this.service.updatet20bat(ranking,name,points,team).subscribe(
      (resp) => {this.check7(); alert("Update T20 Batsman Successful");},
      (error)=>{alert("Internal Server Error")})
  }
  onSubmitT20Ball(ranking:any, name:any, points:any, team:any)
  {
    if(String(ranking).trim()=='' || String(ranking)==null)
    {
      alert("Please Enter Rank");
      return;
    }
    this.service.updatet20ball(ranking,name,points,team).subscribe(
      (resp) => {this.check7(); alert("Update T20 Bowler Successful");},
      (error)=>{alert("Internal Server Error")})
  }
  onSubmitT20All(ranking:any, name:any, points:any, team:any)
  {
    if(String(ranking).trim()=='' || String(ranking)==null)
    {
      alert("Please Enter Rank");
      return;
    }
    this.service.updatet20all(ranking,name,points,team).subscribe(
      (resp) => {this.check7(); alert("Update T20 Allrounder Successful");},
      (error)=>{alert("Internal Server Error")})
  }


  addElementTestBat() {
    var i;
    for(i=0;i<this.testbat?.data?.length;i++)
    {
      if(this.testbat?.data[i].ranking!=i+1)
      {
        break;
      }
    }
    var newRow = {name: "",points: "",ranking: i+1,team: ""};
    this.testbat.data.push(newRow)
    this.testbat = new MatTableDataSource(this.testbat.data);
  }
  addElementTestBowl() {
    var i;
    for(i=0;i<this.testbowl?.data?.length;i++)
    {
      if(this.testbowl?.data[i].ranking!=i+1)
      {
        break;
      }
    }
    var newRow = {name: "",points: "",ranking: i+1,team: ""};
    this.testbowl.data.push(newRow)
    this.testbowl = new MatTableDataSource(this.testbowl.data);
  }
  addElementTestAll() {
    var i;
    for(i=0;i<this.testall?.data?.length;i++)
    {
      if(this.testall?.data[i].ranking!=i+1)
      {
        break;
      }
    }
    var newRow = {name: "",points: "",ranking: i+1,team: ""};
    this.testall.data.push(newRow)
    this.testall = new MatTableDataSource(this.testall.data);
  }
  addElementOdiBat() {
    var i;
    for(i=0;i<this.odibat?.data?.length;i++)
    {
      if(this.odibat?.data[i].ranking!=i+1)
      {
        break;
      }
    }
    var newRow = {name: "",points: "",ranking: i+1,team: ""};
    this.odibat.data.push(newRow)
    this.odibat = new MatTableDataSource(this.odibat.data);
  }
  addElementOdiBowl() {
    var i;
    for(i=0;i<this.odibowl?.data?.length;i++)
    {
      if(this.odibowl?.data[i].ranking!=i+1)
      {
        break;
      }
    }
    var newRow = {name: "",points: "",ranking: i+1,team: ""};
    this.odibowl.data.push(newRow)
    this.odibowl = new MatTableDataSource(this.odibowl.data);
  }
  addElementOdiAll() {
    var i;
    for(i=0;i<this.odiall?.data?.length;i++)
    {
      if(this.odiall?.data[i].ranking!=i+1)
      {
        break;
      }
    }
    var newRow = {name: "",points: "",ranking: i+1,team: ""};
    this.odiall.data.push(newRow)
    this.odiall = new MatTableDataSource(this.odiall.data);
  }
  addElementT20Bat() {
    var i;
    for(i=0;i<this.t20bat?.data?.length;i++)
    {
      if(this.t20bat?.data[i].ranking!=i+1)
      {
        break;
      }
    }
    var newRow = {name: "",points: "",ranking: i+1,team: ""};
    this.t20bat.data.push(newRow)
    this.t20bat = new MatTableDataSource(this.t20bat.data);
  }
  addElementT20Bowl() {
    var i;
    for(i=0;i<this.t20bowl?.data?.length;i++)
    {
      if(this.t20bowl?.data[i].ranking!=i+1)
      {
        break;
      }
    }
    var newRow = {name: "",points: "",ranking: i+1,team: ""};
    this.t20bowl.data.push(newRow)
    this.t20bowl = new MatTableDataSource(this.t20bowl.data);
  }
  addElementT20All() {
    var i;
    for(i=0;i<this.t20all?.data?.length;i++)
    {
      if(this.t20all?.data[i].ranking!=i+1)
      {
        break;
      }
    }
    var newRow = {name: "",points: "",ranking: i+1,team: ""};
    this.t20all.data.push(newRow)
    this.t20all = new MatTableDataSource(this.t20all.data);
  }




  deleteElementTestBat(ranking:any) {
    this.service.deleteElementTestBatService(ranking).subscribe(
      (resp) => {this.check5(); alert("Deleted Test Batsman Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementTestBowl(ranking:any) {
    this.service.deleteElementTestBowlService(ranking).subscribe(
      (resp) => {this.check5(); alert("Deleted Test Bowler Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementTestAll(ranking:any) {
    this.service.deleteElementTestAllService(ranking).subscribe(
      (resp) => {this.check5(); alert("Deleted Test Allrounder Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementOdiBat(ranking:any) {
    this.service.deleteElementOdiBatService(ranking).subscribe(
      (resp) => {this.check6(); alert("Deleted ODI Batsman Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementOdiBowl(ranking:any) {
    this.service.deleteElementOdiBowlService(ranking).subscribe(
      (resp) => {this.check6(); alert("Deleted ODI Bowler Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementOdiAll(ranking:any) {
    this.service.deleteElementOdiAllService(ranking).subscribe(
      (resp) => {this.check6(); alert("Deleted ODI Allrounder Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementT20Bat(ranking:any) {
    this.service.deleteElementT20BatService(ranking).subscribe(
      (resp) => {this.check7(); alert("Deleted T20 Batsman Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementT20Bowl(ranking:any) {
    this.service.deleteElementT20BowlService(ranking).subscribe(
      (resp) => {this.check7(); alert("Deleted T20 Bowler Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementT20All(ranking:any) {
    this.service.deleteElementT20AllService(ranking).subscribe(
      (resp) => {this.check7(); alert("Deleted T20 Allrounder Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }




  
  deleteElementTestBatAll() {
    this.service.deleteElementTestBatServiceAll().subscribe(
      (resp) => {this.check5(); alert("Deleted All Test Batsman Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementTestBowlAll() {
    this.service.deleteElementTestBowlServiceAll().subscribe(
      (resp) => {this.check5(); alert("Deleted All Test Bowler Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementTestAllAll() {
    this.service.deleteElementTestAllServiceAll().subscribe(
      (resp) => {this.check5(); alert("Deleted All Test Allrounder Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementOdiBatAll() {
    this.service.deleteElementOdiBatServiceAll().subscribe(
      (resp) => {this.check6(); alert("Deleted All ODI Batsman Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementOdiBowlAll() {
    this.service.deleteElementOdiBowlServiceAll().subscribe(
      (resp) => {this.check6(); alert("Deleted All ODI Bowler Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementOdiAllAll() {
    this.service.deleteElementOdiAllServiceAll().subscribe(
      (resp) => {this.check6(); alert("Deleted All ODI Allrounder Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementT20BatAll() {
    this.service.deleteElementT20BatServiceAll().subscribe(
      (resp) => {this.check7(); alert("Deleted All T20 Batsman Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementT20BowlAll() {
    this.service.deleteElementT20BowlServiceAll().subscribe(
      (resp) => {this.check7(); alert("Deleted All T20 Bowler Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
  deleteElementT20AllAll() {
    this.service.deleteElementT20AllServiceAll().subscribe(
      (resp) => {this.check7(); alert("Deleted All T20 Allrounder Successful");},
      (error)=>{alert("Internal Server Error");console.log(error)})
  }
}