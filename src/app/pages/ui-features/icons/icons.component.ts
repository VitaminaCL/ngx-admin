import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-icons',
  styleUrls: ['./icons.component.scss'],
  templateUrl: './icons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {

  evaIcons = [];

  constructor(iconsLibrary: NbIconLibraries) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }

  icons = {

    ionicons: [
      'md-add-circle-outline', 'md-add-circle', 'md-add', 'md-airplane', 'md-alarm',
      'md-albums', 'md-alert', 'md-american-football', 'md-analytics', 'md-aperture',
      'md-apps', 'md-appstore', 'md-archive', 'md-arrow-back', 'md-arrow-down',
      'md-arrow-dropdown-circle', 'md-arrow-dropdown', 'md-arrow-dropleft-circle',
      'md-arrow-dropleft', 'md-arrow-dropright-circle', 'md-arrow-dropright',
      'md-arrow-dropup-circle', 'md-arrow-dropup', 'md-arrow-forward', 'md-arrow-round-back',
      'md-arrow-round-down', 'md-arrow-round-forward', 'md-arrow-round-up', 'md-arrow-up',
      'md-at', 'md-attach', 'md-backspace', 'md-barcode', 'md-baseball', 'md-basket',
      'md-basketball', 'md-battery-charging', 'md-battery-dead', 'md-battery-full', 'md-beaker',
      'md-bed', 'md-beer', 'md-bicycle', 'md-bluetooth', 'md-boat', 'md-body', 'md-bonfire',
      'md-book', 'md-bookmark', 'md-bookmarks', 'md-bowtie', 'md-briefcase', 'md-browsers',
      'md-brush', 'md-bug', 'md-build', 'md-bulb', 'md-bus', 'md-business', 'md-cafe',
      'md-calculator', 'md-calendar', 'md-call', 'md-camera', 'md-car', 'md-card', 'md-cart',
      'md-cash', 'md-cellular', 'md-chatboxes', 'md-chatbubbles', 'md-checkbox-outline',
      'md-checkbox', 'md-checkmark-circle-outline', 'md-checkmark-circle', 'md-checkmark',
      'md-clipboard', 'md-clock', 'md-close-circle-outline', 'md-close-circle', 'md-close',
      'md-cloud-circle', 'md-cloud-done', 'md-cloud-download', 'md-cloud-outline',
      'md-cloud-upload', 'md-cloud', 'md-cloudy-night', 'md-cloudy', 'md-code-download',
      'md-code-working', 'md-code', 'md-cog', 'md-color-fill', 'md-color-filter',
      'md-color-palette', 'md-color-wand', 'md-compass', 'md-construct', 'md-contact',
      'md-contacts', 'md-contract', 'md-contrast', 'md-copy', 'md-create', 'md-crop', 'md-cube',
      'md-cut', 'md-desktop', 'md-disc', 'md-document', 'md-done-all', 'md-download', 'md-easel',
      'md-egg', 'md-exit', 'md-expand', 'md-eye-off', 'md-eye', 'md-fastforward', 'md-female',
      'md-filing', 'md-film', 'md-finger-print', 'md-fitness', 'md-flag', 'md-flame',
      'md-flash-off', 'md-flash', 'md-flashlight', 'md-flask', 'md-flower', 'md-folder-open',
      'md-folder', 'md-football', 'md-funnel', 'md-gift', 'md-git-branch', 'md-git-commit',
      'md-git-compare', 'md-git-merge', 'md-git-network', 'md-git-pull-request', 'md-glasses',
      'md-globe', 'md-grid', 'md-hammer', 'md-hand', 'md-happy', 'md-headset', 'md-heart',
      'md-heart-dislike', 'md-heart-empty', 'md-heart-half', 'md-help-buoy',
      'md-help-circle-outline', 'md-help-circle', 'md-help', 'md-home', 'md-hourglass',
      'md-ice-cream', 'md-image', 'md-images', 'md-infinite', 'md-information-circle-outline',
      'md-information-circle', 'md-information', 'md-jet', 'md-journal', 'md-key', 'md-keypad',
      'md-laptop', 'md-leaf', 'md-link', 'md-list-box', 'md-list', 'md-locate', 'md-lock',
      'md-log-in', 'md-log-out', 'md-magnet', 'md-mail-open', 'md-mail-unread', 'md-mail',
      'md-male', 'md-man', 'md-map', 'md-medal', 'md-medical', 'md-medkit', 'md-megaphone',
      'md-menu', 'md-mic-off', 'md-mic', 'md-microphone', 'md-moon', 'md-more', 'md-move',
      'md-musical-note', 'md-musical-notes', 'md-navigate', 'md-notifications-off',
      'md-notifications-outline', 'md-notifications', 'md-nuclear', 'md-nutrition', 'md-open',
      'md-options', 'md-outlet', 'md-paper-plane', 'md-paper', 'md-partly-sunny', 'md-pause',
      'md-paw', 'md-people', 'md-person-add', 'md-person', 'md-phone-landscape',
      'md-phone-portrait', 'md-photos', 'md-pie', 'md-pin', 'md-pint', 'md-pizza', 'md-planet',
      'md-play-circle', 'md-play', 'md-podium', 'md-power', 'md-pricetag', 'md-pricetags',
      'md-print', 'md-pulse', 'md-qr-scanner', 'md-quote', 'md-radio-button-off',
      'md-radio-button-on', 'md-radio', 'md-rainy', 'md-recording', 'md-redo',
      'md-refresh-circle', 'md-refresh', 'md-remove-circle-outline', 'md-remove-circle',
      'md-remove', 'md-reorder', 'md-repeat', 'md-resize', 'md-restaurant', 'md-return-left',
      'md-return-right', 'md-reverse-camera', 'md-rewind', 'md-ribbon', 'md-rocket', 'md-rose',
      'md-sad', 'md-save', 'md-school', 'md-search', 'md-send', 'md-settings', 'md-share-alt',
      'md-share', 'md-shirt', 'md-shuffle', 'md-skip-backward', 'md-skip-forward', 'md-snow',
      'md-speedometer', 'md-square-outline', 'md-square', 'md-star-half', 'md-star-outline',
      'md-star', 'md-stats', 'md-stopwatch', 'md-subway', 'md-sunny', 'md-swap', 'md-switch',
      'md-sync', 'md-tablet-landscape', 'md-tablet-portrait', 'md-tennisball', 'md-text',
      'md-thermometer', 'md-thumbs-down', 'md-thumbs-up', 'md-thunderstorm', 'md-time',
      'md-timer', 'md-today', 'md-train', 'md-transgender', 'md-trash', 'md-trending-down',
      'md-trending-up', 'md-trophy', 'md-tv', 'md-umbrella', 'md-undo', 'md-unlock', 'md-videocam',
      'md-volume-high', 'md-volume-low', 'md-volume-mute', 'md-volume-off', 'md-wallet', 'md-walk',
      'md-warning', 'md-watch', 'md-water', 'md-wifi', 'md-wine', 'md-woman',
    ],

    fontAwesome: [
      'adjust', 'anchor', 'archive', 'chart-area', 'arrows-alt', 'arrows-alt-h',
      'arrows-alt-v', 'asterisk', 'at', 'car', 'ban', 'university',
      'chart-bar', 'barcode', 'bars', 'bed', 'beer',
      'bell', 'bell-slash', 'bicycle', 'binoculars',
      'birthday-cake', 'bolt', 'bomb', 'book', 'bookmark',
      'briefcase', 'bug', 'building', 'bullhorn',
    ],

    fontAwesomeRegular: [ 'chart-bar', 'bell', 'bell-slash', 'bookmark', 'building' ],
  };

}
