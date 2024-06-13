import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl!: string;
  constructor(private http:HttpClient) { }
  setApiUrl(value: string){
    this.apiUrl=value;
  }
  getItems(){
    return this.http.get(this.apiUrl)
  }
  getItem(id:any){
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  addItem(item: any) {
    return this.http.post(this.apiUrl, item)
  }
  updateItem(item: any, id: any) {
    return this.http.put(`${this.apiUrl}/${id}`, item)
  }
  deleteItem(id: any) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
