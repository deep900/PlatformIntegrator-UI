import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Application } from 'src/app/model/application';
import { Url } from 'src/app/model/Url';
import { HttpInvokeService } from 'src/app/service/http-invoke.service';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  applicationForm: FormGroup;
  public selectedFile:any;
  constructor(private fb: FormBuilder,private httpService:HttpInvokeService) {
    this.applicationForm = this.createApplicationForm();
  }
  ngOnInit(): void {    
  }
  createApplicationForm(): FormGroup {
    this.applicationForm = this.fb.group({
      appname: ['',Validators.required, Validators.minLength(3)],
      httpUrl: ['',Validators.required],
      httpsUrl: ['',Validators.required],
      authUrl: ['',Validators.required],
      openAPIDefinitionUrl:['',Validators.required],
      status:['Not Started']
    });
    return this.applicationForm;
  }

  public onSubmit() {
    console.log("Submit Clicked" + JSON.stringify(this.applicationForm.value));
    //let msg = this.httpService.makeHttpPost(this.applicationForm.value,this.getCreateApplicationUrl());
    let msg = this.postData(this.selectedFile,JSON.stringify(this.applicationForm.value));
    console.log("Printing the response:" + JSON.stringify(msg));
  }

  public getCreateApplicationUrl():string{
    return Url.baseUrl + Url.createApplication;
  }

  public postData(fileToUpload:File,appData:string){    
    const formData:FormData = new FormData();
    formData.append('file',fileToUpload);
    formData.append('Application',appData);
    this.httpService.makeHttpFormPost(formData,this.getCreateApplicationUrl()).then(data => {
      console.log(JSON.stringify(data));
    }).catch(error => {
      console.log(JSON.stringify(error));
    })
  }

  public handleFileInput(event:any) {
    let files:FileList = event.target.files;
    console.log(files);
    this.selectedFile = files.item(0);
  }

}
