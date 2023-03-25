import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-bottom-component',
  templateUrl: './bottom-component.component.html',
  styleUrls: ['./bottom-component.component.scss']
})
export class BottomComponentComponent {
  public animal: string = ""
  public name: string = "";

constructor (public dialog: MatDialog) {}
addNew(): void {
  console.log("works");
  // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //   data: {name: this.name, animal: this.animal},
  // });

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log('The dialog was closed');
  //   this.animal = result;
  // });
  this.dialog.open(DialogComponent)
}
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}