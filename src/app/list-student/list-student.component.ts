import { Component } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  students: string[] = [
    'Satoru Gojo',
    'Kento Nanami',
    'Yuji Itadori',
    'Megumi Fushiguro',
    'Nobara Kugisaki',
    'Yuta Okkotsu',
    'Maki Zenin',
    'Toge Inumaki',
    'Kinji Hakari',
    'Masamichi Yaga',
    'Panda',
    'Shoko Ieiri',
    'Yoshinobu Gakuganji',
    'Utahime Iori',
    'Kokichi Muta',

  ];
}
