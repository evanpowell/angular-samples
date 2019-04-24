import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public shortStoryForm: FormGroup;
  public shortStoryText: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setDefaultProperties();
  }

  private setDefaultProperties(): void {
    this.shortStoryForm = this.createShortStoryForm();
  }

  private createShortStoryForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      verb: ['', Validators.required],
      adjective: ['', Validators.required],
      animal: ['', Validators.required],
      place: ['', Validators.required],
    });
  }

  private generateStory() {
    const { name, verb, adjective, animal, place } = this.shortStoryForm.value;
    this.shortStoryText = `I have a pet ${animal} named ${name}. They love to ${verb}. They want to ${verb} all the way to ${place}! What a ${adjective} ${animal}.`
  }

  public onSubmit() {
    this.generateStory();
    this.shortStoryForm.reset();
  }

}
