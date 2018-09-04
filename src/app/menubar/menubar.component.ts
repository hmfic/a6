import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { jmodalComponent } from "../jmodal/jmodal.component";
// import { SyssettingsmodalComponent } from "../syssettingsmodal/syssettingsmodal.component";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  modalTitle:string;

  constructor(private dialog: MatDialog) { };

  openDialog():void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
              id: 1,
              title: 'My Settings'
          };
        // dialogConfig.direction = "rtl";
        this.dialog.open(jmodalComponent, dialogConfig);
    } 

  openSysDialog():void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
              id: 1,
              title: 'System Settings'
          };
        // dialogConfig.direction = "rtl";
        this.dialog.open(jmodalComponent, dialogConfig);
    }


  ngOnInit() { }
 }