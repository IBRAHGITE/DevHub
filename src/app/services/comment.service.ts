import { Injectable } from '@angular/core';
import { Comment } from '../models/coment.model';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private storageKey = 'comment'
  constructor() { }
  getComments(): Comment[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : []
  }
  saveComments(comments:Comment[]):void{
    localStorage.setItem(this.storageKey,JSON.stringify(comments));
  }
  clearComments(): void {
    localStorage.removeItem(this.storageKey)
  }

}
