import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';

import { LgListWithIconsComponent } from './list-with-icons.component';

describe('LgListWithIconsComponent', () => {
  let component: LgListWithIconsComponent;
  let fixture: MockedComponentFixture<LgListWithIconsComponent, {}>;
  let listWithIconsEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgListWithIconsComponent ],
    }).compileComponents();

    ngMocks.flushTestBed();

    fixture = MockRender(
      `
      <ul lg-list-with-icons>
        <li lg-list-with-icons-item iconName="help">List item 1</li>
        <li lg-list-with-icons-item iconName="idea"
          >List item 2
          <ul lg-list-with-icons id="nested-list">
            <li lg-list-with-icons-item iconName="at">List item 2.1</li>
            <li lg-list-with-icons-item iconName="phone-on">List item 2.2</li>
          </ul>
        </li>
        <li lg-list-with-icons-item iconName="house">List item 3</li>
      </ul>
    `,
      {},
      { reset: true },
    );

    component = fixture.debugElement.children[0].componentInstance;
    listWithIconsEl = fixture.debugElement.children[0].nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(listWithIconsEl.getAttribute('class')).toContain('lg-list-with-icons');
  });

  it('should add unordered class when host element is ul', () => {
    expect(listWithIconsEl.getAttribute('class')).toContain(
      'lg-list-with-icons--unordered',
    );
  });

  it('should add default as the default size', () => {
    expect(listWithIconsEl.getAttribute('class')).toContain(
      'lg-list-with-icons--default',
    );
  });

  it('should add the size class to a nested list', () => {
    component.size = 'large';
    component.ngAfterContentInit();

    expect(
      listWithIconsEl.querySelector('#nested-list')?.getAttribute('class'),
    ).toContain('lg-list-with-icons--large');
  });

  it('should add ordered class when host element is ol', () => {
    const orderedFixture = MockRender(
      `
      <ol lg-list-with-icons>
        <li lg-list-with-icons-item iconName="help">List item 1</li>
        <li lg-list-with-icons-item iconName="idea">List item 2</li>
      </ol>
    `,
      {},
      { reset: true },
    );

    orderedFixture.detectChanges();

    const orderedListEl = orderedFixture.debugElement.children[0].nativeElement;

    expect(orderedListEl.getAttribute('class')).toContain('lg-list-with-icons--ordered');
  });
});
