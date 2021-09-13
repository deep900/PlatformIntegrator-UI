import { Component, OnInit } from '@angular/core';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { CellInfo } from 'src/app/model/cell-info';
import { Url } from 'src/app/model/Url';
import { HttpInvokeService } from 'src/app/service/http-invoke.service';

@Component({
  selector: 'app-display-cell',
  templateUrl: './display-cell.component.html',
  styleUrls: ['./display-cell.component.css']
})
export class DisplayCellComponent implements OnInit {

  constructor(private httpService:HttpInvokeService) { }

  public cellInfoList:CellInfo[] | undefined;

  ngOnInit(): void {
    this.loadAllCells();
    this.loadCells();
  }

  private loadCells(){
    this.httpService.makeHttpGet(this.getAllCellsUrl()).then(data => {
      console.log(JSON.stringify(data));
      this.cellInfoList = data.body;
    });
  }

  private getAllCellsUrl(){
    return Url.baseUrl + Url.getCell;
  }

  private loadAllCells(){
    this.cellInfoList = [];
    let data = new CellInfo();
    data.cellname = 'Sample-Cell1';
    data.port = 8090;
    data.status = 'Not running';

    let data1 = new CellInfo();
    data1.cellname = 'Sample-Cell2';
    data1.port = 8091;
    data1.status = 'Running';
    this.cellInfoList.push(data);
    this.cellInfoList.push(data1);
  }

  public getBuildUrl(){
    return Url.baseUrl + Url.buildCellUrl;
  }

  public handleCellBuild(event:any){
    //console.log('Building cell:' + cellName);
    console.log(event.target.id);
    let cellName = event.target.id;
    this.httpService.makeHttpGet(this.getBuildUrl()+ "?cellName=" + cellName).then(data => {
      console.log('Printing the response:' + JSON.stringify(data));
    }).catch(error => {
      console.log(JSON.stringify(error));
    });
  }
}
