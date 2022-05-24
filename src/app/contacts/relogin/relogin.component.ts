import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-relogin',
  templateUrl: './relogin.component.html',
  styleUrls: ['./relogin.component.css']
})
export class ReloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login = new FormGroup({
    name: new FormControl('',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('[a-zA-Z]+')
    ]),
    password :new FormControl('',
    [
      Validators.required,
      Validators.minLength(6)
    ]),
  })

}
