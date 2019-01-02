import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { ResultService } from '../result/result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})



export class ResultComponent implements OnInit {

    
    results:Result[];
  
  ngOnInit() {
  }

  constructor(private resultservice:ResultService)
  {

  }

  submitvalues(var1:number,var2:number,var3:number)
  {
    console.log(var1,var2,var3);
    this.resultservice.submitvalues(new Result(var1,var2,var3)).subscribe(data=>{this.results=data;});
  }
  
    

}
