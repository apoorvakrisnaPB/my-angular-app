import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from '../my-first-service.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css'],
})
export class MyFirstComponentComponent implements OnInit {
  message: string = '';

  constructor(private myFirstService: MyFirstServiceService) {}

  ngOnInit(): void {
    this.message = this.myFirstService.getMessage();
  }
}
