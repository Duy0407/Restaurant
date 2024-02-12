import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  optionSelect = [
    {
      icon: 'assets/image/icon/user.svg',
      text: 'Profile',
      index: 1,
      url: '',
    },
    {
      icon: 'assets/image/icon/heart-broken.svg',
      text: 'Favourite',
      index: 2,
      url: '',
    },
    {
      icon: 'assets/image/icon/archive-book.svg',
      text: 'Order',
      index: 3,
      url: '',
    },
    {
      icon: 'assets/image/icon/message-question.svg',
      text: 'Instruction',
      index: 4,
      url: '',
    },
    {
      icon: 'assets/image/icon/key.svg',
      text: 'Change Password',
      index: 5,
      url: '',
    },
  ];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout(){

  }

  clickOption(option: any){
    switch (option.index) {
      // case 1:
      //   return this.showPage(option.url);
      default:
        alert("Chức năng đang phát triển!");
        break;
    }
  }

  showPage(url: string){}

}
