import { Component, OnInit } from '@angular/core';
import { AllMatchesService } from '../services/all-matches.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allCurrentMatches!: any[];

  constructor(private allMatchesService: AllMatchesService) { }

  ngOnInit(): void {
    this.allMatchesService.allCurrentMatches().subscribe((data: any) => {
      this.allCurrentMatches = data.data.sort((a: { date: string; }, b: { date: string; }) => b.date > a.date ? 1 : -1);
    })



    // this.allMatchesService.temp().subscribe(
    //   (data:any) => {console.log(data)},
    //   (error) => {console.log("ppp",error)}
    // )

  }

}
