import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dinosaur',
  templateUrl: './dinosaur.component.html',
  styleUrls: ['./dinosaur.component.css']
})
export class DinosaurComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  showName = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.showName = !this.showName;
  }
}
