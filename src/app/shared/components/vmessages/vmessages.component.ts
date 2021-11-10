import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-vmessage',
  templateUrl: './vmessages.component.html'
})
export class VMessageComponent {

  @Input() text = '';
}
