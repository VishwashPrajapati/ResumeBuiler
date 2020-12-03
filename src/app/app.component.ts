import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Resume,Education,Skill, Experience } from './resume';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resumebuilder';

  resume = new Resume();

  degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];

  formdata = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    number: new FormControl(''),
    email: new FormControl(''),
    profile: new FormControl(''),
    skills: new FormControl(''),
    employer: new FormControl(''),
    jobdesc: new FormControl(''),
    jobtitle: new FormControl(''),
    jobexperience: new FormControl(''),
    degree: new FormControl(''),
    collage: new FormControl(''),
    passing: new FormControl(''),
    percentage: new FormControl(''),
    details: new FormControl(''),
  });


  formdataget() {
    console.log(this.formdata.value);
  }

  // addskills() {
  //   let row = document.createElement('div');
  //   row.className = 'col-md-3';
  //   row.innerHTML = `
  //     <div class="form-group"><input type="text" class="form-control" id="skills" name="skills" formControlName="skills" placeholder="e.g Java/ PHP"></div>`;
  //   document.querySelector('.showskills').appendChild(row);
  // }

  addskills(){
    this.resume.skill.push(new Skill());
  }
  addEducation(){
    this.resume.education.push(new Education());
  }
  addExperience(){
    this.resume.experience.push(new Experience());
  }
  fileChanged(e){
      const file = e.target.files[0];
      this.getBase64(file); 
  }
  getBase64(file){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.resume.profilePic = reader.result as string;
    }
  }
  resetform(){
    this.resume = new Resume();
  }

}

