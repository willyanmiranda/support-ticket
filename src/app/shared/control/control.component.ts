import { Component, ElementRef, inject, HostBinding, input, Input, ViewEncapsulation, ContentChild, contentChild, AfterContentInit, afterRender, afterNextRender } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  //@HostBinding('class') className = 'control';
  @Input({ required: true }) label!: string;
  private el = inject(ElementRef);
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('after render')
    })

    afterNextRender(() => {
      console.log('after next render')
    })
  }

  ngAfterContentInit() {
    console.log('after content')  
  }

  onClick() {
    console.log('teste')
    console.log(this.el)
  }
}
