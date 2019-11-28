import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { WebSocketService } from '../services/websocket.service';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
  providers: [WebSocketService]
})
export class Dashboard2Component implements OnInit {

  constructor(private wsService: WebSocketService){
    this.wsService.connect('ws://localhost:8080/quotes')
      .subscribe(
        (msg) => {
          console.log('Mensagem recebida do WS: ' + msg.data);
        },
        (error) => {
          console.log('Erro do WS: ' + error);
        }
      )
  }

  lineChartLabels: Label[] = ['10:20', '10:40', '10:50', '10:59', '11:09', '11:1'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'yellow',
      backgroundColor: 'rgba(255,255,0,0.15)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Preços das Ações' },
  ];

  ngOnInit(): void {
    console.log('DASH2');
  }

}
