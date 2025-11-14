import { Component } from "@angular/core";

@Component({
    standalone:false,
    selector:'app-register',
    template:`
        <div class="register-container bg-dark text-white">
            <div>
                <p>Ready to watch? Enter your email to create or restart your memebership</p>
                <div class="input-group  input-group-lg">
                    <input type="email" placeholder="Email Address" class="form-control">
                    <Button class="btn btn-danger">Get Started</Button>
                </div>
            </div>
        </div>
    `,
    styles:[".register-container{display:flex;justify-content:center;align-items:center;height:400px}"]
})
export class NetflixRegister{

}