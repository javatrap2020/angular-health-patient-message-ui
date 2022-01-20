import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css']
})

export class DisplayBoardComponent implements OnInit {
  constructor() {
  }

  @Input() patientCount = 0;
  @Output() getPatientsEvent = new EventEmitter()

  ngOnInit(): void {
  }

  getAllPatients() {
    this.getPatientsEvent.emit('get all users');
  }
}
