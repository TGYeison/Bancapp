import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
  @Input() 
  refControl: any;

  @Input()
  typeControl: string = 'text';

  @Input()
  label: string = '';
}
