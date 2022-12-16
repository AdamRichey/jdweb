import { Component, OnInit } from '@angular/core';
import {contactform} from './contactform';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform = new contactform('','','','','','','')

  constructor() { }

  ngOnInit(): void {
  }

}