import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from "../../services/login.service";

@Component({
  selector: 'app-p-login',
  templateUrl: './p-login.component.html',
  styleUrls: ['./p-login.component.scss']
})
export class PLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  loginResult : boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ){

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  get loginFormControl() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.loginService.login(this.loginFormControl.username.value, this.loginFormControl.password.value)
      .subscribe(
        data => {
          console.log('Response:', data);
          if(data == true) {
            this.router.navigate(['p-list'], {});
          } else{
            this.loading = false;
            this.router.navigate(['p-login'], {});
          }
        });
  }
}
