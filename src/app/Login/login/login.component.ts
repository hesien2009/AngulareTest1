import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Submit(f)
  {
console.log(f);
  }
}
