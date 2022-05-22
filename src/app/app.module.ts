import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { QuotesComponent } from './quotes/quotes.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, CardComponent, QuotesComponent, UsersComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
