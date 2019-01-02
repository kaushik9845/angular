import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResultComponent } from './result/result.component';
import { Result } from './result';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ResultComponent]
})
export class AppComponent {
  
    
        constructor()
    {
    
    }
 
  
}
