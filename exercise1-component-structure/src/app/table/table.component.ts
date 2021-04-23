import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets} from "chart.js";
import {Label} from "ng2-charts";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  chartData: ChartDataSets[]

  @Input()
  chartLabels: Label[]

  constructor() { }

  ngOnInit(): void {
  }

}
