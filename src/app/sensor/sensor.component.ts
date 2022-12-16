import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import {
    NodeModel, DecoratorModel, DiagramTools, ConnectorModel, SnapSettingsModel
} from '@syncfusion/ej2-diagrams';
import { InputDataComponent } from '../input-data/input-data.component';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit{

    bitStringStream:number[][] = [[1,1,1,1,1,1,1], 
                                  [1,1,1,1,1,1,1], 
                                  [1,1,1,1,1,1,1], 
                                  [1,1,1,1,1,1,1], 
                                  [1,1,1,1,1,1,1], 
                                  [0,0,0,0,1,0,0], 
                                  [1,1,0,1,0,1,1],
                                  [1,1,1,1,0,0,0],
                                  [1,1,1,1,1,1,1]
                                ];
    sensorStatuses:string[] = [];
    constructor(private dialog: MatDialog){

    }

    ngOnInit(){
        this.evaluateSensorStatus();
    }

    private evaluateSensorStatus(){
        this.sensorStatuses = [];
        for(let i =0; i<this.bitStringStream.length; i++){
            let status:string;
            if(this.bitStringStream[i][this.bitStringStream[i].length-1] == 0){
                this.sensorStatuses.push("BROKEN");
                continue;
            }else if(this.bitStringStream[i].includes(0) && this.bitStringStream[i].includes(1)){
                this.sensorStatuses.push("UNSTABLE");
                continue;
            }else{
                for(let j=0; j<this.bitStringStream[i].length; j++){
                    if(this.bitStringStream[i][j] == 1){
                        continue;
                    }
                }
                this.sensorStatuses.push("OK");
            }
        }
       //console.log(this.sensorStatuses)
    }

    getUrl(index:number){
        return "../assets/images/"+this.sensorStatuses[index]+".png";
    }

    /* generateSensorData1(){
        this.bitStringStream =  Array.from({ length: 9 }).map(() =>
            Array.from({ length: 7 }).map(() => Math.round(Math.random()))
        );
        this.evaluateSensorStatus();
    } */

    generateSensorData(){
        let temp:number[] = [];
        for(let i=0; i<this.bitStringStream.length-1; i++){
            for(let j = this.bitStringStream.length-1; j>0; j--){
                temp = this.bitStringStream[i];
                this.bitStringStream[i] = this.bitStringStream[j];
                this.bitStringStream[j] = temp;
            }
        }
        this.evaluateSensorStatus();
    }

    openCustomDataDialog(){
      const dialogRef = this.dialog.open(InputDataComponent, {
      });
    
      dialogRef.afterClosed().subscribe(result => {
        //console.log(result);
        this.bitStringStream = result;
        this.evaluateSensorStatus();
      });
    }
  
}
