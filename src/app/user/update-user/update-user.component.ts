import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
   id!:number;
   
  constructor(private actR:ActivatedRoute){}
  ngOnInit(): void {
   this.getparam();
  }
  getparam(){
    //this.id=Number(this.actR.snapshot.paramMap.get('param'));
    this.actR.paramMap.subscribe(data=>this.id=Number(data.get('param')))
    //this.lname= String(this.actR.snapshot.queryParamMap.get('lname'))
    
  }

}
