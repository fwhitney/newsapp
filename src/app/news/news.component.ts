// 2022 Ferris Whitney
// News Component

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	rawdata: Array<any> = [];
	topic: string = 'Red Tide';
	startdate: string = '2022-05-01';
	apiKey: string = '97082b53865041e9a0e5b9d51d671a2d';
	test: string = '';
	newtopic: string = '';
	newdate: string = '';
	constructor() {
		
	}
	// Refreshes the data when the send button is pressed.
	// Does a GET request wth the new topic and start date.
	// Recieves a json array and takes the individual articles and saves them into the rawdata array.
	refreshData(newtopic: string, newdate: string){
		fetch('https://newsapi.org/v2/everything?q=' + newtopic + '&from=' 
		+ newdate + '&sortBy=publishedAt&apiKey=' + this.apiKey ,{
			method: 'GET',
			headers: {
			}
		})
		.then( (response) => (response.json()))
		.then( (json) => {
			this.rawdata = json['articles'];
			console.log(json);
		});
	}
	// Does a GET request wth the new topic and start date when the component is created.
	// Recieves a json array and takes the individual articles and saves them into the rawdata array.
	ngOnInit(): void {
	  fetch('https://newsapi.org/v2/everything?q=' + this.topic + '&from=' 
		+ this.startdate + '&sortBy=publishedAt&apiKey=' + this.apiKey ,{
			method: 'GET',
			headers: {
			}
		})
		.then( (response) => (response.json()))
		.then( (json) => {
			this.rawdata = json['articles'];
			console.log(json);
		});
	}
}
