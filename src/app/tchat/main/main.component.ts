import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  newMsgSend!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.newMsgSend = new FormGroup({
      content: new FormControl("")
    })
  }

  onSendMessage(){
    let tchat = document.getElementById('tchat');
    let newTextSend = document.createElement('p');
    newTextSend.classList.add('msgSend');
    tchat?.appendChild(newTextSend);
  }

}
