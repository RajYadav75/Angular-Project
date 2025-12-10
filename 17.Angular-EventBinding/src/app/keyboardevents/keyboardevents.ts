import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboardevents',
  standalone: false,
  templateUrl: './keyboardevents.html',
  styleUrl: './keyboardevents.css',
})
export class Keyboardevents
{
  public users: any[] = [
    { UserName: 'john' },
    { UserName: 'john12' },
    { UserName: 'john_nit' },
    { UserName: 'david' }
  ];

  public UserError: string = '';
  public isInValid: boolean = false;
  public isPwdWarnVisible = false;
  public PwdError: string = '';

  public VerifyUser(e: any)
  {
    for (var user of this.users) {
      if (user.UserName == e.target.value) {
        this.UserError = `User Name is taken - Try Another`;
        this.isInValid = true;
        break;
      } else {
        this.UserError = `User Name Avaiable`;
        this.isInValid = false;
      }
    }
  }

  public VerifyPassword(e: any)
  {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      this.isPwdWarnVisible = true;
    } else {
      this.isPwdWarnVisible = false;
    }
  }
  public VerifyRequired(e: any)
  {
    if (e.target.value == "") {
      this.UserError = "User Name Required";
      this.isInValid = true;
    } else {
      this.UserError = "";
    }
  }
  public PasswordFocus()
  {
    this.PwdError = 'Caps Not Allowed';
  }
  public PasswordBlur()
  {
    this.PwdError = '';
  }

}
