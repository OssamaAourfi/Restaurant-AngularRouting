import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import {FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  register = new  FormGroup ({
    name : new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('[a-zA-Z]+')
    ]),
    email : new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password : new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])

  })
 

}
