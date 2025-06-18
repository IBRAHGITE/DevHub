import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/coment.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
@Component({
  selector: 'app-home',
  imports: [NgClass,NgFor, CommentComponent, FormsModule,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  comments!: Comment[];
  newComment = '';
  constructor(
    private commentService: CommentService
  ){}
  ngOnInit(): void {
    this.comments = this.commentService.getComments()
  }
  addComment() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.newComment.trim()) {
        const newCom: Comment = {
        id: Date.now(),
        author: user, // pour l'instant fixe
        message: this.newComment,
        timestamp: new Date(),
        replies: [],
      };
      this.comments.unshift(newCom);
      this.newComment = '';
    }
  }
  saveComments() {
  this.commentService.saveComments(this.comments);
}


}
