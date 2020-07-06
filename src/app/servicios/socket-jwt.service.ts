import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketJwtService extends Socket {


  constructor() { 
    const token = localStorage.getItem("guardarToken");
      super({ url:  'http://localhost:3500', options: {
        query: `token=${token}`
        
      }
    });
  }
}
