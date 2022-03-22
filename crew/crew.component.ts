import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
crewMembers:string[]=['Jasmin Moghbeli','Raja Clark','Jessica Watkins']
  constructor() { }

  ngOnInit(): void {
  }

}
