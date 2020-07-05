import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketJwtService extends Socket {

  constructor() { 
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZGF2aWRAZ21haWwuY29tIiwiaWF0IjoxNTkzOTcwMjk1LCJleHAiOjE1OTQwMzAyOTV9.3TBYrUFmw8OvyGbM4gsZ1gFB96_ubHtXbgOXnQrUXPM';
      super({ url:  'http://localhost:3500', options: {
        query: `token=${token}`
        
      }
    });
  }
}
