import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorHelper } from '@swimlane/ngx-charts';
import { DataService } from '../data.service';

@Component({
  selector: 'app-datacontagiatizone',
  templateUrl: './datacontagiatizone.component.html',
  styleUrls: ['./datacontagiatizone.component.scss']
})

export class DatacontagiatizoneComponent implements OnInit{
  multi: any[];
  loaded: Boolean = false;
  public activeEntries: any[] = [];
  public chartNames: string[];
  public colors: ColorHelper;

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Data';
  yAxisLabel: string = 'Contagiati';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#0388f8', '#21c51d', '#fdb22b', '#f882a9', '#e33b3b', '#f67050', '#05aea0', '#da1fcb', '#b36cf2', '#d6d80c']
  };

  constructor(private dataService : DataService) {
    dataService.getContagiToscana().then(arg => {
      this.multi = dataService.data_for_all_charts['aree'];
      this.loaded=true;
    });
  }

  public ngOnInit(): void {

    this.dataService.getContagiToscana().then(arg =>{
        // Get chartNames
        this.chartNames = this.multi.map((d: any) => d.name);
        // Convert hex colors to ColorHelper for consumption by legend
        this.colors = new ColorHelper(this.colorScheme, 'ordinal', this.chartNames, this.colorScheme);
    });
  
  }

  onSelect(data): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  public legendLabelActivate(item: any): void {
     this.activeEntries = [item];      
  }

  public legendLabelDeactivate(item: any): void {
     this.activeEntries = [];
  }

}