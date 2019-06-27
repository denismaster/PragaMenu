import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _clear$ = new Subject<void>();

  get clearOrder$(){
    return this._clear$.asObservable();
  }

  clearOrder(){
    this._clear$.next();
  }
}
