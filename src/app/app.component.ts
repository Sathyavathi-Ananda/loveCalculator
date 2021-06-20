import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  registerForm!: FormGroup;
  submitted = false;
  love: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      yourName: ['', Validators.required],
      partnerName: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let const1 = 0;
    let const2 = 0;
    let vowel1 = this.countVowels(this.registerForm.value.yourName);
    let vowel2 = this.countVowels(this.registerForm.value.partnerName);
    if (vowel1 == vowel2) {
      this.love = this.love + this.getRandomInt(10, 30)
    }
    const1 = this.countConstants(this.registerForm.value.yourName);
    const2 = this.countConstants(this.registerForm.value.partnerName);
    if (const1 == const2) {
      this.love = this.love + this.getRandomInt(20, 40);
    }
    let line1 = this.registerForm.value.yourName;
    let line2 = this.registerForm.value.partnerName;
    let split1 = line1.split();
    let split2 = line2.split();
    let fl1 = split1[0].split();
    let fl2 = split2[0].split();
    if (fl1 == fl2) {
      this.love = this.love + this.getRandomInt(10, 30);
    }
    if (this.registerForm.value.yourName.length == this.registerForm.value.partnerName.length) {
      this.love = this.love + this.getRandomInt(1, 10);
    }
    this.love = this.love + this.getRandomInt(10, 50);
    if (this.love > 100) {
      this.love = 100;
    }


  }
  countVowels(sentence: string[]) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counts = 0;
    for (let i = 0; i < vowels.length; i++) {
      if (vowels.includes(sentence[i])) {
        counts++;
      }
    }
    return console.log(counts);
  }
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  countConstants(sentence: string[]) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let constantsCounts = 0;
    for (let i = 0; i < vowels.length; i++) {
      if (!vowels.includes(sentence[i])) {
        constantsCounts++;
      }
    }
    return constantsCounts;
  }
}


