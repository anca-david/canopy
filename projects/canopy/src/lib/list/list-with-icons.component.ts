import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  Input,
  QueryList,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { ListWithIconsSize } from './list-with-icons.interface';

@Component({
  selector: '[lg-list-with-icons]',
  template: '<ng-content select="[lg-list-with-icons-item]" />',
  styleUrls: [ './list-with-icons.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-list-with-icons',
  },
  standalone: true,
})
export class LgListWithIconsComponent implements AfterContentInit {
  private hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  private renderer = inject(Renderer2);

  private _size?: ListWithIconsSize;

  @ContentChildren(forwardRef(() => LgListWithIconsComponent), {
    descendants: true,
  })
  nestedListWithIconsComponents!: QueryList<LgListWithIconsComponent>;

  @Input()
  set size(size: ListWithIconsSize) {
    this.updateHostClass('lg-list-with-icons--', this._size, size);
    this._size = size;
    this.nestedListWithIconsComponents?.forEach(c => (c.size = size));
  }
  get size(): ListWithIconsSize | undefined {
    return this._size;
  }

  ngAfterContentInit(): void {
    const isOrdered = this.hostElement.nativeElement.tagName?.toLowerCase() === 'ol';

    this.updateListType(isOrdered);
    this.size = this.size || 'default';
  }

  private updateHostClass(
    prefix: string,
    oldValue: ListWithIconsSize | undefined,
    newValue: ListWithIconsSize | undefined,
  ): void {
    if (oldValue) {
      this.renderer.removeClass(this.hostElement.nativeElement, `${prefix}${oldValue}`);
    }

    if (newValue) {
      this.renderer.addClass(this.hostElement.nativeElement, `${prefix}${newValue}`);
    }
  }

  private updateListType(isOrdered: boolean): void {
    const orderedClass = 'lg-list-with-icons--ordered';
    const unorderedClass = 'lg-list-with-icons--unordered';

    if (isOrdered) {
      this.renderer.addClass(this.hostElement.nativeElement, orderedClass);
      this.renderer.removeClass(this.hostElement.nativeElement, unorderedClass);
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, unorderedClass);
      this.renderer.removeClass(this.hostElement.nativeElement, orderedClass);
    }
  }
}
