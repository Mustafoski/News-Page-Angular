import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
})
export class JumbotronComponent implements OnInit {
  title = 'Latest trending news on trending topics';
  subtitle = 'Subscribe for the latest news';
  btnText = 'Subscribe';

  constructor() {}

  ngOnInit(): void {}
}
