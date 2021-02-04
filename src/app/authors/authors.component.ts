import { Component, OnInit } from '@angular/core';
import { AuthorService } from "../author.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  noOfAuthors;

  constructor(authorService:AuthorService) {
    this.noOfAuthors = authorService.getAuthorsCount();
   }

  ngOnInit(): void {
  }

}
