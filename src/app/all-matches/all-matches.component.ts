import { Component, OnInit } from '@angular/core';
import { AllMatchesService } from '../services/all-matches.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {

  constructor(private allMatchesService: AllMatchesService) { }

  allMatches!: any[]
  allCurrentMatches!: any[]

  ngOnInit(): void {
    this.allMatchesService.allMatches().subscribe((data: any) => {
      this.allMatches = data.data;
    })

    this.allMatchesService.allCurrentMatches().subscribe((data: any) => {
      this.allCurrentMatches = data.data;
    })
  }

}
