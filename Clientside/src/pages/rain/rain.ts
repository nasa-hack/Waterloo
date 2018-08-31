import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Nav} from 'ionic-angular';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map'
import { ListPage } from '../list/list';
import { AppProvider } from '../../providers/app/app';


/**
 * Generated class for the RainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rain',
  templateUrl: 'rain.html',
})
export class RainPage {

  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  result:any;
  error:any;
  dataPM = [];
  dataPRM = [];
  dataM=[];
  label = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav,public app:AppProvider) {
    this.getdata();
  }

  ionViewDidLoad() {
    console.log(this.dataPRM)
    console.log('ionViewDidLoad RainPage');
    this.Chart();
  }

  Chart(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: this.label,
            datasets: [
                {
                    label: "PreMonsoon",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.dataPRM,
                    spanGaps: false,
                },
                {
                  label: "Monsoon",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(70,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: this.dataM,
                  spanGaps: false,
              },
              {
                label: "PostMonsoon",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(70,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.dataPM,
                spanGaps: false,
            }
            ]
        }

    });

}

getdata(){
  this.app.getData(localStorage.getItem("lat"),localStorage.getItem("lng")).subscribe(res=>{
   this.result=res;
   this.result.map(r=>{
     this.dataPM.push(r.POSTMONSOONKHARIF);
     this.dataM.push(r.MONSOON);
     this.dataPRM.push(r.PREMONSOON);
     this.label.push(r.YEAR_OBS);
   })
},err=>{
    this.error="Someting Went Wrong";
});
 }


  backButton(){
    this.nav.setRoot(ListPage);
  }


}
