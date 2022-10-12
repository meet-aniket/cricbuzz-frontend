import { Component, OnInit } from '@angular/core';
import { AllSeriesService } from '../services/all-series.service';

@Component({
  selector: 'app-all-series',
  templateUrl: './all-series.component.html',
  styleUrls: ['./all-series.component.css']
})
export class AllSeriesComponent implements OnInit {

  constructor(private allSeriesService: AllSeriesService) { }

  allSeries!: any[]

  ngOnInit(): void {
    this.allSeriesService.allSeries().subscribe((data: any) => {
      this.allSeries = data.data;
    })
  }

}
