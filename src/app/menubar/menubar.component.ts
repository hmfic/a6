import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
//import {CourseDialogComponent} from "../course-dialog/course-dialog.component";
//import { DialogOverviewExampleComponent } from "../dialog-overview-example/dialog-overview-example.component";
import { MysettingsmodalComponent } from "../mysettingsmodal/mysettingsmodal.component";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private dialog: MatDialog) { };

  openDialog():void {
  		console.log("In openDialog");
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        console.log("before open...");
        this.dialog.open(MysettingsmodalComponent, dialogConfig);
    } 

    //const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //  width: '250px',
    //  data: {name: this.name, animal: this.animal}
    //});

  ngOnInit() {
  }
 }

//@Component({
//  selector: 'my-settings-modal',
//  templateUrl: '../mysettingsmodal/mysettingsmodal.component'
//})

//export class DialogOverviewExampleComponent {
//  constructor(private dialog: MatDialog) {}
//} 

export interface DialogData {
  animal: string;
  name: string;
}