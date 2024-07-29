import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionsModalComponent } from './new-transactions-modal.component';

describe('NewTransactionsModalComponent', () => {
  let component: NewTransactionsModalComponent;
  let fixture: ComponentFixture<NewTransactionsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTransactionsModalComponent]
    });
    fixture = TestBed.createComponent(NewTransactionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
