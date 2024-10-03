import { Component, ElementRef, inject, HostBinding, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  @Input({ required: true }) label!: string;
  private el = inject(ElementRef);

  onClick() {
    console.log('teste')
    console.log(this.el)
  }
}
