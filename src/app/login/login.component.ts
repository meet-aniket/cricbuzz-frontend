import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;
  errorMessage!: String;
  showError!: Boolean;
  allAdmin!: any[];
  constructor(private formbuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginform = this.formbuilder.group(
      {
        id: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  loginUser() {
    this.loginService.login().subscribe(
      (admin) => {
        if ((this.loginform.value.id == admin[0].login_id && this.loginform.value.password == admin[0].login_password) ||
          (this.loginform.value.id == admin[1].login_id && this.loginform.value.password == admin[1].login_password) ||
          (this.loginform.value.id == admin[2].login_id && this.loginform.value.password == admin[2].login_password)) {
          this.showError = false;
          this.errorMessage = "";
          this.loginService.setUser(this.loginform.value);
          this.router.navigate(['/admin-dashboard']);
        }
        else {
          this.showError = true;
          this.errorMessage = "Please enter correct credentials";
        }
      },
      (error)=>{
        alert("Interner Server Error ! 303");
      }
    )
  }
}
