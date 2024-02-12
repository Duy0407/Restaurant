import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public headerNavigation = [
    {linkPage: 'hotel', disable: true},
    {linkPage: 'restaurant', disable: true},
    {linkPage: 'homestay', disable: true},
    {linkPage: 'tour', disable: true},
    {linkPage: 'utilities', disable: true},
    {linkPage: 'cooperate', disable: true},
    {linkPage: 'blog', disable: true},
  ]
}
