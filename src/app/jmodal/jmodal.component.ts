import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogContent, MatFormFieldModule, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MenubarComponent} from "../menubar/menubar.component";
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Inject } from '@angular/core';

@Component({
  selector: 'app-mysettingsmodal',
  templateUrl: './jmodal.component.html',
  styleUrls: ['./jmodal.component.css']
})  // end component

export class jmodalComponent implements OnInit {
    constructor(
    	private fb: FormBuilder,
        private dialogRef: MatDialogRef<jmodalComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
        	this.modalTitle = data.title;

    		} 

    close() {
      //console.log("CLOSED");
      this.dialogRef.close();
    	}

    ngOnInit() {

    }
}
