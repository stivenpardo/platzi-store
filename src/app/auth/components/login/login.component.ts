import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../../../core/services/auth.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private authService: AuthService,
  ) {
    this.buildForm();
  }
  ngOnInit(): void {

  }
  login (event: Event){
    event.preventDefault();
    const user = this.form.value
    this.form.valid
    ? this.authService.login(user.email, user.password)
    .then(()=>{
      this.router.navigate(['/admin'])
    })
    .catch(()=>{
      alert('User does not exist')
    })
    :console.log('the form is no valid')

  }
  // first item of property in the array is initialization
  private buildForm(){
    this.form = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

}
