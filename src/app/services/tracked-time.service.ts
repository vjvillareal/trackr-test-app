import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackedTimeService {

  constructor() { }

  storeToLocalStorage(records: any) {
    localStorage.setItem("records", JSON.stringify(records));
  }

  getFromLocalStorate() {
    const tracks = localStorage.getItem("records");
  }
}