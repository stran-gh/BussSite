import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private searchService: SearchService) {
  }

  stopsList:string[] = [];
  busSearched = false;

  ngOnInit() {
  	//Subscribe to the event that the search button is pressed
  	this.searchService.searchPressed.subscribe(
  		(result) => {
  			this.busSearched = true;
  		}
  	);

  	this.searchService.stopsList.subscribe(
			(resultList: string[]) => {
				this.stopsList = resultList;
				console.log(this.stopsList);
			}
	);
  }

}
