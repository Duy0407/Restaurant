import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoginSuccess: boolean = true;
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.email,
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
        ])
      ],
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  handleSubmit() {
    console.log(1);
    
  }

  navigateRegisterPage() {
    console.log(2);
    
  }

}
