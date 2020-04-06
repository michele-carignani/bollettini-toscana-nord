/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datacontagiati',
  templateUrl: './datacontagiati.component.html',
  styleUrls: ['./datacontagiati.component.scss']
})
export class DatacontagiatiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { multi } from './data';
import { pianaDiLuccaData } from './pianadiluccadata';
import { apuaneData } from './apuanedata';
import { lunigianaData } from './lunigianadata';

@Component({

  selector: 'app-datacontagiatizone',
  templateUrl: './datacontagiatizone.component.html',
  styleUrls: ['./datacontagiatizone.component.scss']
})

export class DatacontagiatizoneComponent {
  multi: any[];
  view: any[] = [700, 500];

  // options
  legend: boolean = true;
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
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onClickFun(localita): void{
    if(localita == 'Piana di Lucca'){
      this.multi = null;
      this.multi = (pianaDiLuccaData);
      console.log(pianaDiLuccaData);
    } else if(localita == 'Apuane'){
      this.multi = null;
      this.multi = (apuaneData);
      console.log(pianaDiLuccaData);
    } else if(localita == 'Lunigiana'){
      this.multi = null;
      this.multi = (lunigianaData);
      console.log(pianaDiLuccaData);
    } else {
      this.multi = null;
      this.multi = multi;
      console.log(multi);
    }
  }

}