import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-consum-data-chart',
  templateUrl: './consum-data-chart.component.html',
  styleUrls: ['./consum-data-chart.component.scss']
})
export class ConsumDataChartComponent implements OnInit {

  chartData: any;
  chartType = 'bar';
  chartDatasets: Array<any>;
  chartLabels: Array<any>;
  month = [];


  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(69, 165, 160, 0.7)',
      ],
      borderColor: [
        'rgb(69, 165, 160)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }



  constructor(private service: DashboardService) {
    this.setMontNames();
  }

  setMontNames() {
    this.month[0] = 'Jan';
    this.month[1] = 'Fev';
    this.month[2] = 'Mar';
    this.month[3] = 'Abr';
    this.month[4] = 'Mai';
    this.month[5] = 'Jun';
    this.month[6] = 'Jul';
    this.month[7] = 'Ago';
    this.month[8] = 'Set';
    this.month[9] = 'Out';
    this.month[10] = 'Nov';
    this.month[11] = 'Dez';
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getConsum().subscribe(result => {
      this.chartData = result.sort((a, b) => a.closedDay.localeCompare(b.closedDay));
      this.setChartData();
    });
  }

  setChartData() {
    const values = [];
    const consum = [];
    const labels = [];
    const colors = [];
    const borderColors = [];
    const colors2 = [];
    const borderColors2 = [];

    this.chartDatasets = [];
    this.chartLabels = [];
    this.chartColors = [];

    this.chartData.forEach(data => {
      values.push(data.value);
      consum.push(data.qnt);
      colors.push('rgba(100, 204, 201, 0.7)');
      colors2.push('rgba(209, 217, 178, 0.7)');
      borderColors2.push('rgb(209, 217, 178)');
      borderColors.push('rgb(100, 204, 201)');
      const date = new Date(parseInt(data.closedDay));
      this.chartLabels.push(this.month[date.getMonth()] + '/' + date.getFullYear().toString());
    });

    this.chartDatasets.push({
      data: consum, label: 'Consumo (kW/h)'
    });

    this.chartDatasets.push({
      data: values, label: 'Valores R$'
    });
    this.chartColors.push({
      backgroundColor: colors,
      borderColor: borderColors,
      borderWidth: 2,
    });
    this.chartColors.push({
      backgroundColor: colors2,
      borderColor: borderColors2,
      borderWidth: 2,
    });

  }
}
