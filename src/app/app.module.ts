import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { ResultService } from './result/result.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ResultComponent,ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
