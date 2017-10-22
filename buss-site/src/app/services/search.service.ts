import { EventEmitter } from '@angular/core';

export class SearchService{
	constructor(){
	}

	searchPressed = new EventEmitter<boolean>();
    stopsList = new EventEmitter<string[]>();

  	searchStops(busRoute: string){
  		//Javascript and python to see the routes goes here
  		//Make an array and emit it in stopsList
  		this.stopsList.emit(['hey', 'shit','nice']);
  	}
}