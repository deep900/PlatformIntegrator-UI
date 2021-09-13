import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ResponseMessage } from 'src/app/model/reponse-message';
import { Url } from 'src/app/model/Url';
import { HttpInvokeService } from 'src/app/service/http-invoke.service';


@Component({
  selector: 'app-create-cell',
  templateUrl: './create-cell.component.html',
  styleUrls: ['./create-cell.component.css']
})
export class CreateCellComponent implements OnInit {
  cellForm: FormGroup;
  constructor(private fb: FormBuilder,private httpService:HttpInvokeService) {
    this.cellForm = this.createCellForm();
  }
  ngOnInit(): void {

  }
  createCellForm(): FormGroup {
    this.cellForm = this.fb.group({
      cellname: ['',Validators.required, Validators.minLength(3)],
      port: ['',Validators.required],
      status:['Not Started']
    });
    return this.cellForm;
  }

  public onSubmit() {
    console.log("Submit Clicked" + JSON.stringify(this.cellForm.value));
    let msg = this.httpService.makeHttpPost(this.cellForm.value,this.getCreateCellUrl());
    console.log("Printing the response:" + JSON.stringify(msg));
  }

  public getCreateCellUrl():string{
    return Url.baseUrl + Url.createCell;
  }

}
