import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MetaService } from './meta.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [MetaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
