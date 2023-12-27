import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(){}

  public get loading$() {
    return this._loading as Observable<boolean>;
  }

  public get instantLoading(): boolean {
    return this._loading.value;
  }

  public setLoading(state: boolean) {
    this._loading.next(state);
  }
}
