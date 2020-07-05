import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Documentos } from '../modelos/documentos';
import { SocketJwtService } from './socket-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  count = 0;
  documentoActual = this.socket.fromEvent<Documentos>('gestionDato');
  docs = this.socket.fromEvent<string[]>('gestionDatos');

  constructor(private socket: SocketJwtService ) { }

  getDoc = (id: string) => {
    this.socket.emit('getDoc', id)
  }

  newDoc = () => {
    console.log(this.socket);
    if(this.socket.ioSocket.connected){
      this.socket.emit('addDoc', {id: '', doc: '', passw: '12345'})
    }else {
      alert('no se pudo conectar con el servidor')
    }
   
  }

  editDoc = (doc: Documentos) => {
    this.socket.emit('editDoc', doc)
  }

  private docId = () =>{
    this.count ++;
    const text = `documento ${this.count}`
    return text;
  }
}
