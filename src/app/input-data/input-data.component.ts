import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent {

  bitStringStream:number[][] = [  [0,0,0,0,0,0,0], 
                                  [0,0,0,0,0,0,0], 
                                  [0,0,0,0,0,0,0], 
                                  [0,0,0,0,0,0,0], 
                                  [0,0,0,0,0,0,0], 
                                  [0,0,0,0,0,0,0], 
                                  [0,0,0,0,0,0,0],
                                  [0,0,0,0,0,0,0],
                                  [0,0,0,0,0,0,0]
                                ];

//I am getting some ui error with a single array so taken another replica                                ];
bitStringStream1:number[][] = [  [0,0,0,0,0,0,0], 
                                [0,0,0,0,0,0,0], 
                                [0,0,0,0,0,0,0], 
                                [0,0,0,0,0,0,0], 
                                [0,0,0,0,0,0,0], 
                                [0,0,0,0,0,0,0], 
                                [0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0],
                                [0,0,0,0,0,0,0]
                              ];

 constructor(public dialogRef: MatDialogRef<InputDataComponent>, @Inject(MAT_DIALOG_DATA) public data: any,){}

 onNoClick(): void {
  this.dialogRef.close();
}

onBitEntry(value:any, i:number, j:number){
  //console.log(value);
  this.bitStringStream1[i][j] = parseInt(value);
}

}
