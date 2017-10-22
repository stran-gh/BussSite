import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  busRoute: string;

  onSearchPressed(){
  	this.searchService.searchStops(this.busRoute);
  	this.searchService.searchPressed.emit(true);
  }
}
