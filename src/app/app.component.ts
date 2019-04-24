import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DBikes } from './bikes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  configUrl: 'https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=e8f71ce22587fdb0f1c07a23d62d6b25263811e0';


  getBikes(): Observable<DBikes[]> {
    return this.http.get<DBikes[]>(this.configUrl)
  }

  public bikes = []
  ngOnInit() {
    this.getBikes().subscribe(data => this.bikes = data);
    console.log(this.bikes)
  }

}


