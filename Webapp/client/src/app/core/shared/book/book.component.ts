// Decorators
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// Models
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input('book') book: Book;

  constructor(private router: Router){
    
  }
  showDetail(id) {
    this.router.navigate(['/book/details/' + id])
  }

}
