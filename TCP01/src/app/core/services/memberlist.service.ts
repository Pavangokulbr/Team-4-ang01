import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberlistService {

  constructor() { }
  public Team4List:string[]=['pavan','abhi','vidya','chethana','brunda','priya']
  Pushele(){
    this.Team4List.push("new member")
  }
  Popele(){
    this.Team4List.pop()
  }
}
