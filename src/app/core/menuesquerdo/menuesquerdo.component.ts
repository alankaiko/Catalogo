import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuesquerdo',
  templateUrl: './menuesquerdo.component.html',
  styleUrls: ['./menuesquerdo.component.css']
})
export class MenuesquerdoComponent implements OnInit {
  teste: false;
  constructor() { }

  ngOnInit() {
  }



  FecharLateraHome() {
    const elementos = document.getElementById('arquivo');
    if (elementos.style.display === 'none') {
      elementos.style.display = 'block';
      document.getElementById('layout-aberto').style.display = 'block';
    } else {
      elementos.style.display = 'none';
      document.getElementById('layout-aberto').style.display = 'none';
    }
  }

  FecharLateraQuemSomos() {
    const elementos = document.getElementById('atendimento');
    if (elementos.style.display === 'none') {
      elementos.style.display = 'block';
    } else {
      elementos.style.display = 'none';
    }
  }

}
