import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthservicesService } from './authservices.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req:any, next:any){
    let authservice=this.injector.get(AuthservicesService)
    let tokenizerReq=req.clone(
      {
        setHeaders:
        {
          Authorization:`CheckUsers ${authservice.getToken()}`
        }
      }
    )
    return next.handle(tokenizerReq);
  }
}
