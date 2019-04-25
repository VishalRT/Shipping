import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  login;
  signUp;

  loginSubmit : boolean = false ;
  signUpSubmit : boolean = false ;
  captchaVal : boolean=true;
  seq;
  disp:boolean=true;
  disp1:boolean=false;
  temp:boolean;
  ngOnInit()
  {
    if(this.captchaVal==true)
      this.call();
    this.login=new FormGroup({
      loginType:new FormControl('',[Validators.required]),
      cId:new FormControl('',[Validators.required]),
      pass:new FormControl( '',[Validators.required]),
      captchaValue:new FormControl('')
      
    },
    {
      validators : [ this.captchaCheck]
    }
    );

    this.signUp=new FormGroup({
      fname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
      lname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
      cId:new FormControl('',[Validators.required,Validators.pattern('[6-9]{1}[0-9]{9}')]),
      pass:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z]+[@_]{1}[0-9]+')]),
      cpass:new FormControl('',[Validators.required])
      
    },
    { 
      validators : [ this.confirmPass]
   }
    );
  }

  captchaCheck : ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  {
    const captcha = control.get('captchaValue');
      if( this.seq === captcha.value )
         {
           console.log(captcha.value);
           return  null ;
         }
      else
      {
        console.log("error");
        captcha.setErrors({ 'misMatch' : true});
          return  ;
      }  
  }

  confirmPass : ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  {
    const pass = control.get('pass');
    const cpass = control.get('cpass');

      if( pass.value === cpass.value )
         return  null ;
      else
      {
          cpass.setErrors({ 'noMatch' : true});
          return  ;
      }  
  }
  call()
  {
    
       this.seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
       console.log(this.seq);
    
  }

  get loginPush()
  {
       return this.login.controls; 
  }
  get signUpPush()
  {
       return this.signUp.controls; 
  }
 

  

  constructor() { }

  changeValue(val)
  {
    if(val==false)
      {
        this.disp1=true;
        this.disp=false;
        this.signUpSubmit = false;
      }
    else
      {
        this.disp1=false;
        this.disp=true;
        this.loginSubmit = false;
      }

  }

  onLoginSubmit(login)
  {
    //sdkjfhgdskjhfdskjhh sdjfhdskjfh kjsdhfkj hsdjkfhdsjk hskdjh es
      this.loginSubmit = true;
      if(this.captchaVal==true)
      this.call();
      if(this.login.invalid)   
        return; 
      console.log(login);
  }
  onSignUpSubmit(submit)
  {
      this.signUpSubmit = true;
      if(this.signUp.invalid)   
        return;
      console.log(submit);
  }

   

}
