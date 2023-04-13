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
}