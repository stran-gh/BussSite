import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 

@Injectable()
export class SearchService {
	constructor(private http: Http){
	}

	searchPressed = new EventEmitter<boolean>();
    stopsList = new EventEmitter<string[]>();

  	searchStops(busRoute: string){
  		//Javascript and python to see the routes goes here
  		
  		this.http.get('http://18.216.73.164:8080/route/' + busRoute).toPromise().then(
  			(response: Response) => {
  				var stopsArr: string[] = [];
  				for (let index in response.json()){
  					stopsArr.push(response.json()[index]);
  				}
  				this.stopsList.emit(stopsArr);

  			}
  		);
  		
  		




  		//Make an array and emit it in stopsList
  		//this.stopsList.emit(['hey', 'shit','nice']);
  	}


}