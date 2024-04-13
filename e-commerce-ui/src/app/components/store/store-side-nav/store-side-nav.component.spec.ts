import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSideNavComponent } from './store-side-nav.component';

describe('StoreSideNavComponent', () => {
  let component: StoreSideNavComponent;
  let fixture: ComponentFixture<StoreSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
