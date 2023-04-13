import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackedTimeService {

  constructor() { }

  storeToLocalStorage(records: any) {
    let savedRecords = this.getFromLocalStorage();
    savedRecords.push(records);
    localStorage.setItem("records", JSON.stringify(savedRecords));
  }

  getFromLocalStorage() {
    const record = localStorage.getItem("records") as string;
    return record !== null ? JSON.parse(record) : [];
  }
}