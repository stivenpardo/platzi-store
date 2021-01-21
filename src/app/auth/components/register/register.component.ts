import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../../../core/services/auth.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  register (event: Event){
    event.preventDefault();
    const user = this.form.value
    this.form.valid
    ? this.authService.signIn(user.email, user.password)
    .then(()=>{
      this.router.navigate(['/auth/login']);
    })
    : console.log('The form is not valid')


  }
  // first item of property in the array is initialization
  private buildForm(){
    this.form = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

}
