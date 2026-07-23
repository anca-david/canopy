import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { IconName, LgIconComponent } from '../../icon';

@Component({
  selector: '[lg-list-with-icons-item]',
  templateUrl: './list-with-icons-item.component.html',
  styleUrls: [ './list-with-icons-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-list-with-icons-item',
  },
  imports: [ LgIconComponent ],
})
export class LgListWithIconsItemComponent {
  @Input() iconName: IconName = 'bullet-point';
  @Input() variant: 'mono' | 'positive' | 'negative' = 'mono';

  @HostBinding('style.--list-item-icon-colour')
  get itemIconColour(): string {
    switch (this.variant) {
      case 'positive':
        return 'var(--list-item-positive-colour)';
      case 'negative':
        return 'var(--list-item-negative-colour)';
      default:
        return 'var(--text-default-primary-colour)';
    }
  }
}
