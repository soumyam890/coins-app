import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultComponentComponent } from './default-component.component';

describe('DefaultComponentComponent', () => {
  let component: DefaultComponentComponent;
  let fixture: ComponentFixture<DefaultComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Coin App'`, () => {
    const fixture = TestBed.createComponent(DefaultComponentComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Coin App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DefaultComponentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.app-toolbar').textContent).toContain('Coin App');
  });
});
