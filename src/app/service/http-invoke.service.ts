import { Injectable } from '@angular/core';
import { ResponseMessage } from '../model/reponse-message';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInvokeService {

  constructor(private http:HttpClient) { }

  public makeHttpPost(request:string,url:string) :Promise<any> {
    return this.http.post(url,request,{headers:this.getCommonHeader()}).toPromise().catch((error) => {
      console.log(JSON.stringify(error));
    });    
  }

  public makeHttpFormPost(formData:FormData,url:string) :Promise<any> {
    return this.http.post(url,formData,{headers:this.getFileUploadHeader()}).toPromise().catch((error) => {
      console.log(JSON.stringify(error));
    });    
  }


  public makeHttpGet(url:string):Promise<any> {
    return this.http.get(url,{headers:this.getCommonHeader()}).toPromise().catch((error) => {
      console.log(JSON.stringify(error));      
    });
  }

  public getCommonHeader():HttpHeaders {
    const headers = new HttpHeaders();
    headers.set("Content-Type","application/json");
    return headers;
  }

  public getFileUploadHeader():HttpHeaders {
    const headers = new HttpHeaders();
    headers.set("Content-Type","application/octet-stream");
    headers.set("Accept","multipart/form-data");
    return headers;
  }
}
