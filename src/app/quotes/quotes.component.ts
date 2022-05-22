import { Component, OnInit } from '@angular/core';
import { Quote, QuotesService } from './quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  constructor(private quotesService: QuotesService) {}
  quote: Quote = {} as Quote;
  ngOnInit(): void {
    this.quotesService
      .getRandom()
      .subscribe((data: Quote) => (this.quote = data));
  }
}
