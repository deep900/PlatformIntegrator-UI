import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Application } from 'src/app/model/application';
import { CellInfo } from 'src/app/model/cell-info';
import { Url } from 'src/app/model/Url';
import { HttpInvokeService } from 'src/app/service/http-invoke.service';

@Component({
  selector: 'app-associate-app',
  templateUrl: './associate-app.component.html',
  styleUrls: ['./associate-app.component.css']
})
export class AssociateAppComponent implements OnInit {

  public associationForm: FormGroup;
  public cellInformation: CellInfo | undefined;
  public cellInfoList: CellInfo[] | undefined;
  public applicationInfoList: Application[] | undefined;

  constructor(private fb: FormBuilder, private httpService: HttpInvokeService) {
    this.associationForm = this.createAssociationForm();
  }

  ngOnInit(): void {
    this.loadCells();
    this.loadApplications1();
  }

  createAssociationForm(): FormGroup {
    this.associationForm = this.fb.group({
      cellinfo: [''],
      cellid: [''],
      appinfo: [''],
      appid: ['']
    });
    return this.associationForm;
  }

  public onCellChange() {

  }

  private loadCells() {
    this.httpService.makeHttpGet(this.getAllCellsUrl()).then(data => {
      console.log(JSON.stringify(data));
      this.cellInfoList = data.body;
    });
  }



  private getAllCellsUrl() {
    return Url.baseUrl + Url.getCell;
  }

  public loadApplications1() {
    console.log("Loading the application details");
    this.httpService.makeHttpGet(this.getAllApplicationsUrl()).then(data => {
      console.log(JSON.stringify(data));
      this.applicationInfoList = data.body;
    });
  }

  public getAllApplicationsUrl() {
    return Url.baseUrl + Url.getApplications;
  }

  public getAssociationUrl():string {
    return Url.baseUrl + Url.associationUrl;
  }

  public onSubmit() {
    console.log('Printing the form details:' + JSON.stringify(this.associationForm.value));
    this.httpService.makeHttpPost(this.associationForm.value,this.getAssociationUrl()).then(data => {
      console.log(JSON.stringify(data));
    });
  }
}
