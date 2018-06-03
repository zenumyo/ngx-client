import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Copyright@ <b><a href="#" target="_blank">Yome</a></b> 2018</span>
    <div class="socials">
      <a href="https://www.facebook.com/Yomefoods/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/yomefoods" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.youtube.com/channel/UCXHpRB4GoRqVUJA4ssdU7QQ/featured?view_as=subscriber" target="_blank" class="ion ion-social-youtube"></a>
      <a href="https://plus.google.com/u/1/107014639896263346830" target="_blank" class="ion ion-social-googleplus"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
