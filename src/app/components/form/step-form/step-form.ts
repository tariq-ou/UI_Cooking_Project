import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-steps-form',
  imports: [
    FormsModule
  ],
  templateUrl: './step-form.html',
  styleUrl: './step-form.css',
})

export class StepsForm {
  @Input() steps: string = '';
  @Output() stepsChange = new EventEmitter<string>();

  onTextareaChange(value: string) {
    //const updatedSteps = value.split('\n').map(step => step.trim()).filter(step => step);
    this.stepsChange.emit(value);
  }

  // get stepsText(): string {
  //   return this.steps.join('\n');
  // }
}
