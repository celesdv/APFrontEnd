import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticathionService } from 'src/app/services/autenticathion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticathionService:AutenticathionService, private route:Router) { 
    this.form = this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]]
      }
    )
  }

  ngOnInit() {

  }

  get Email()
  {
    return this.form.get('email')
  }

  get Password()
  {
    return this.form.get('password')
  }

  onSubmit(event:Event)
  {
    event.preventDefault;
    this.autenticathionService.login(this.form.value).subscribe(data=>{
      console.log("DATA: "+JSON.stringify(data));
      this.route.navigate(['/portfolio']);
    })
  }
}
