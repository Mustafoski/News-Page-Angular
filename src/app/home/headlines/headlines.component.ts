import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css'],
})
export class HeadlinesComponent implements OnInit {
  headline = 'Headlines';

  headlines = [
    {
      urlToImg:
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5ld3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'News Title',
      description: 'News Descriptionn',
    },
    {
      urlToImg:
        'https://images.unsplash.com/photo-1611154570311-f189b75b8125?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fG5ld3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Electronic News',
      description: 'Digital electronic news...',
    },
    {
      urlToImg:
        'https://images.unsplash.com/photo-1559223607-180d0c16c333?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG5ld3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Production News',
      description: 'News about production of sort',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
