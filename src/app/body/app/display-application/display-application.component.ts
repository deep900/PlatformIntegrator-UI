import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/model/application';
import { Url } from 'src/app/model/Url';
import { HttpInvokeService } from 'src/app/service/http-invoke.service';

@Component({
  selector: 'app-display-application',
  templateUrl: './display-application.component.html',
  styleUrls: ['./display-application.component.css']
})
export class DisplayApplicationComponent implements OnInit {

  constructor(private httpService:HttpInvokeService) { }
  public applicationInfoList:Application[]  = [];

  ngOnInit(): void {
    this.loadApplications1();
  }

  public loadApplications(){
    let data3 = new Application();
    data3.httpUrl="http://localhost:8080/carrental";
    data3.appname = "Car Rental";
    data3.status = "Running";
    this.applicationInfoList.push(data3);

    let data1 = new Application();
    data1.httpUrl="http://localhost:8081/hotelreservation";
    data1.appname = "Hotel Reservation";
    data1.status = "Running";
    this.applicationInfoList.push(data1);

    let data2 = new Application();
    data2.httpUrl="http://localhost:8082/ezpass";
    data2.appname = "EZPass";
    data2.status = "Running";
    this.applicationInfoList.push(data2);

    let data4 = new Application();
    data4.httpUrl="http://localhost:8083/insurance";
    data4.appname = "Insurance";
    data4.status = "Running";
    this.applicationInfoList.push(data4);

    let data5 = new Application();
    data5.httpUrl="http://localhost:8084/insurance-quote";
    data5.appname = "Insurance-Quote";
    data5.status = "Running";
    this.applicationInfoList.push(data5);
  }

  public loadApplications1(){
    console.log("Loading the application details");
    this.httpService.makeHttpGet(this.getAllApplicationsUrl()).then(data => {
      console.log(JSON.stringify(data));
      this.applicationInfoList = data.body;
    });
  }

  public getAllApplicationsUrl(){
    return Url.baseUrl + Url.getApplications;
  }

}
