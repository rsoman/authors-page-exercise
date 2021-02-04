import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  private authorsList:Array<string>;
  constructor() {
      this.authorsList = ["Author 1", "Author 2", "Author 3"];
   }

  getAuthorsList() {
    return this.authorsList;
  }

  getAuthorsCount() {
    return this.authorsList.length;
  }
}
