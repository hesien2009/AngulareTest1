import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'reactiveslogin',
  templateUrl: './reactiveslogin.component.html',
  styleUrls: ['./reactiveslogin.component.css']
})
export class ReactivesloginComponent  {

  form=new FormGroup(
    {
      email:new FormControl('',Validators.required || Validators.email),
      password: new FormControl()

    }
  )
get email()
{
  return this.form.get('email');
}

}
