import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _registerService: RegisterService,
    private toastr: ToastrService) { }

  hide: boolean = true


  user_email
  user_password
  user_password_confirmation
  lang = 'ar'
  created_by
  company_name = "company name"
  company_address = "company address"
  company_phone
  company_business_email
  company_avatar
  company_country_id
  company_city_id = "5"
  company_extra_data
  user_full_name
  user_phone
  user_position
  user_nationality
  user_status
  user_is_admin
  user_extra_data



  //**
  //**
  //**
  //**






  onSubmit(form) {
     

    if (form.valid && (form.value.user_password == form.value.user_password_confirmation)) {
      form.value['company_business_email'] = form.value.user_email
      form.value['company_phone'] = form.value.user_phone
      form.value['lang'] = this.lang
      form.value['company_name'] = this.company_name
      form.value['company_address'] = this.company_address
      form.value['company_city_id'] = this.company_city_id
       let data = { ...form.value }

      this._registerService.addUser(data).subscribe(res => {
        this.toastr.success('User Added Successfuly')
      }, error => {
        this.toastr.error('Error Occurs')

      })
    }
 
  }
}
