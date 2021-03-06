import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.pug',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @Input() id: string;
  @Input() placeholder: string;
  @Input() change: (event: any) => void;
  @Input() value;
  constructor() { }

  ngOnInit(): void {
  }
}
