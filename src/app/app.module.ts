import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingService } from 'src/services/loading.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
