import { Component, OnInit } from '@angular/core';
import { TokenService } from '../servicios/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private token: TokenService) { }

  ngOnInit() {
  }
   
    tokenJwt: any;
    email: any;
    passw: any;

  ingresar(){
    let  data = {
    "usuario" : {

      "email" : this.email,
      "passw" :  this.passw
    
    }

    }
    this.token.login(data).subscribe(
      response => {
        this.tokenJwt =response[ 'token' ];
        localStorage.setItem("guardarToken", this.tokenJwt);
      },
      error => {
        console.log('No vale');
      }
    )
    
  }

}
