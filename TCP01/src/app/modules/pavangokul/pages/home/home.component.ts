import { Component, OnInit } from '@angular/core';
import { MemberlistService } from 'src/app/core/services/memberlist.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public gokul:MemberlistService){
    this.Team4List=this.gokul.Team4List
  }
    
  Team4List:string[]=[]
  ngOnInit(): void {
  }

  Name="Cristiano Ronaldo"
  Isfootballer=true
  getcolor(){
    return this.Isfootballer?'blue':'red' 
  }

  


  
}
