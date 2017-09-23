import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OwnersActionFormatterPipe } from './pipes/owners-action-formatter.pipe';
import { ResponseActionFormatterPipe } from './pipes/response-action-formatter.pipe';
import { ProperCasePipe } from './pipes/proper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavigationComponent,
    OwnersActionFormatterPipe,
    ResponseActionFormatterPipe,
    ProperCasePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
