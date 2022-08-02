import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  minDate = new Date();
  maxDate = new Date('2022,8,20');

  dateFilter = (date: Date | null): boolean => {
    if(date!==null){
      const day = date.getDay();
      return day!==0 && day!==6;
    };
    return false;
  }
}
