import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/model/application';

@Component({
  selector: 'app-display-application',
  templateUrl: './display-application.component.html',
  styleUrls: ['./display-application.component.css']
})
export class DisplayApplicationComponent implements OnInit {

  constructor() { }
  public applicationInfoList:Application[]  = [];

  ngOnInit(): void {
    this.loadApplications();
  }

  public loadApplications(){
    let data3 = new Application();
    data3.httpUrl="http://localhost:8080/carrental";
    data3.name = "Car Rental";
    data3.status = "Running";
    this.applicationInfoList.push(data3);

    let data1 = new Application();
    data1.httpUrl="http://localhost:8081/hotelreservation";
    data1.name = "Hotel Reservation";
    data1.status = "Running";
    this.applicationInfoList.push(data1);

    let data2 = new Application();
    data2.httpUrl="http://localhost:8082/ezpass";
    data2.name = "EZPass";
    data2.status = "Running";
    this.applicationInfoList.push(data2);

    let data4 = new Application();
    data4.httpUrl="http://localhost:8083/insurance";
    data4.name = "Insurance";
    data4.status = "Running";
    this.applicationInfoList.push(data4);

    let data5 = new Application();
    data5.httpUrl="http://localhost:8084/insurance-quote";
    data5.name = "Insurance-Quote";
    data5.status = "Running";
    this.applicationInfoList.push(data5);
  }

}
