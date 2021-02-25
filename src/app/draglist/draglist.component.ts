import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draglist',
  templateUrl: './draglist.component.html',
  styleUrls: ['./draglist.component.css']
})
export class DraglistComponent implements OnInit {

  todo = [
    
  ];

  done = [
    'FLEXIBLE',
    'ADVENTUROUS',
    'COMPETITIVE',
    'INQUISITIVE',
    'CALM',
    'HUMBLE',
    'HAPPY',
    'OUTGOING',
    'TRUSTING',
    'HOPEFUL',
    'KIND',
  ];

  review = [
    
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
