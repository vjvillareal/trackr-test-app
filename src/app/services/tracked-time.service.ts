import { Injectable } from '@angular/core';
import { first, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackedTimeService {
  ifNewDataAdded: Subject<Object> = new Subject<Object>();

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

  getGroupedByProject() {
    let savedRecords = this.fetchFromLocalStorage();
    if(savedRecords.length >= 1) {
    let byProject = savedRecords.reduce((byProject: any, item: any) => {
      let project = (byProject[item.project] || []);
      project.push(item);
      byProject[item.project] = project;
      return byProject;
    }, []);
    return Object.entries(byProject).reverse();
    } else { return []; }
  }

  getRecordThisWeek() {
    let data = this.fetchFromLocalStorage();
    const today = new Date();
    const firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7));
    let thisWeek = data.filter((rec: any) => {
      return new Date(rec['date']).getDate() >= firstDay.getDate() && new Date(rec['date']).getDate() <= lastDay.getDate();
    });
    return thisWeek;
  }
}