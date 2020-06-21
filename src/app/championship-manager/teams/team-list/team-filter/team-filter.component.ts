import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-scm-team-filter',
  templateUrl: './team-filter.component.html',
  styleUrls: ['./team-filter.component.scss']
})
export class TeamFilterComponent implements OnInit {
  private debouncedObservable = new Subject<string>();

  @Output() filterChange: EventEmitter<string> = new EventEmitter();
  @Output() filterDebouncedChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.debouncedObservable.pipe(debounceTime(400)).subscribe(value => {
      this.filterDebouncedChange.emit(value);
    });
  }

  inputKeyup(value: string) {
    this.filterChange.emit(value);
    this.debouncedObservable.next(value);
  }

}
