import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  Batsman: boolean = false;
  Bowler: boolean = false;
  Allrounder: boolean = false;
  teams: boolean = false;
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
  testteam!: MatTableDataSource<any>;
  oditeam!: MatTableDataSource<any>;
  t20team!: MatTableDataSource<any>;
  constructor(private service: RankingService) { }
  displayedPlayers: string[] = ['ranking', 'name', 'team', 'points'];
  displayedTeams: String[] = ['ranking', 'teamName', 'team', 'points', 'ratings']
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

  colorH1!: any;
  colorH2!: any;
  colorH3!: any;
  colorH4!: any;
  colorF1!: any;
  colorF2!: any;
  colorF3!: any;

  check1() {
    this.colorH1 = "rgb(166, 255, 0)";
    this.colorH2 = "";
    this.colorH3 = "";
    this.colorH4 = "";
    this.gettestbat();
    this.Batsman = true;
    this.Bowler = false;
    this.Allrounder = false;
    this.teams = false;

  }
  check2() {
    this.colorH2 = "rgb(166, 255, 0)";
    this.colorH1 = "";
    this.colorH3 = "";
    this.colorH4 = "";
    this.gettestbowl();
    this.Batsman = false;
    this.Bowler = true;
    this.Allrounder = false;
    this.teams = false;
  }
  check3() {
    this.colorH3 = "rgb(166, 255, 0)";
    this.colorH2 = "";
    this.colorH1 = "";
    this.colorH4 = "";
    this.gettestall();
    this.Batsman = false;
    this.Bowler = false;
    this.Allrounder = true;
    this.teams = false;
  }
  check4() {
    this.colorH4 = "rgb(166, 255, 0)";
    this.colorH2 = "";
    this.colorH3 = "";
    this.colorH1 = "";
    this.gettestteam();
    this.Batsman = false;
    this.Bowler = false;
    this.Allrounder = false;
    this.teams = true;
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
    if (this.teams == true) {
      this.gettestteam();
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
    if (this.teams == true) {
      this.getoditeam();
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
    if (this.teams == true) {
      this.gett20team();
    }

  }


}
