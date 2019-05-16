import { Component, OnInit } from '@angular/core';
import { userSettings } from '../Data/UserSettings';
import { NgForm } from '@angular/forms';
import { DataService } from '../Data/data.service';


@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css']
})
export class UserFormsComponent implements OnInit {

  formheading: string = "User Demo Form"

  errorMessage: string;

  postError : boolean = false ;
  postErrorMessage : string;

  errortext: string = "Please enter the name with atleast 3 characters "

  originaluserSettings: userSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null

  }

  userSettings: userSettings = {...this.originaluserSettings }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onHttpErrors(errorResponse : any)
  {
    console.log('error : ' , errorResponse)
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('The status of the form validation is ', form.valid)

    if (form.valid) {
      this.dataService.postUserRecords(this.userSettings).subscribe(res => console.log('Succes',res),
      error => this.onHttpErrors(error))
    }
    else{
      this.postError = true;
      this.postErrorMessage ="Please fix the above errors "
    }
  }

}
