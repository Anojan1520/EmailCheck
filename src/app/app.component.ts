import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Email';
  form: FormGroup;

  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      from_name:'',
      to_name:'User',
      from_email:'',
      subject:'',
      message:'',
    })
  }


  async send() {
    emailjs.init('C9Pmx8pwGHvOuk2Pi');
    let response = await emailjs.send("service_dvpvh9y", "template_diewy7j", {
      from_name: this.form.value.from_name,
      to_name:  this.form.value.to_name,
      from_email:  this.form.value.from_email,
      subject:  this.form.value.subject,
      message:  this.form.value.message
    });
    alert('This message hasbeen send')
    this.form.reset();
  }

}
