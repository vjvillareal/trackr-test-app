import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackedTimeService {

  constructor() { }

  storeToLocalStorage(record: any) {
    let savedRecords = this.fetchFromLocalStorage();
    savedRecords.push(record);
    localStorage.setItem("records", JSON.stringify(savedRecords));
  }

  fetchFromLocalStorage() {
    let record = localStorage.getItem("records") as string;
    return record !== null ? JSON.parse(record) : [];
  }

  getGroupedByDate() {
    let savedRecords = this.fetchFromLocalStorage();
    if(savedRecords.length >= 1) {
    let byDate = savedRecords.reduce((byDate: any, item: any) => {
      let date = (byDate[item.date] || []);
      date.push(item);
      byDate[item.date] = date;
      return byDate;
    }, []);
    return Object.entries(byDate).reverse();
    } else { return []; }
  }

  // text color (dark blue): #0e1e37
  // blue: #d6e6ff
  // yellow: #fff8b4
  // green: #d5ffb3
  // pink: #ffddff
  // orange: #fce2c7
}