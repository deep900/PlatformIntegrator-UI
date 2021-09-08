import { Component, OnInit } from '@angular/core';
import { CellInfo } from 'src/app/model/cell-info';
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
  }

  private loadAllCells(){
    this.cellInfoList = [];
    let data = new CellInfo();
    data.name = 'Sample-Cell1';
    data.port = 8090;
    data.status = 'Not running';

    let data1 = new CellInfo();
    data1.name = 'Sample-Cell2';
    data1.port = 8091;
    data1.status = 'Running';
    this.cellInfoList.push(data);
    this.cellInfoList.push(data1);
  }
}
