import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../models/coment.model';
import { DatePipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-comment',
  imports: [NgClass, FormsModule ,DatePipe, NgStyle,NgIf,NgFor],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input() comment!: Comment;
  @Input() depth = 0;
  showReplies: boolean = true;
  showReplyField: boolean = false;
  @Output() commentUpdate = new EventEmitter<void>();
  replyText: string = '';
     toggleReplies() {
    this.showReplies = !this.showReplies;
  }
    addReply() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!this.replyText.trim()) return;

    const reply: Comment = {
      author: user,
      message: this.replyText,
      timestamp: new Date(),
      replies: [],
      id: 0,
      likes: 0,
      dislikes:0
    };

    this.comment.replies = this.comment.replies || [];
    this.comment.replies.push(reply);

    this.replyText = '';
    this.showReplyField = false;
    this.commentUpdate.emit();
  }
  like() {
    const key = `voted_${this.comment.id}`;
    if (!localStorage.getItem(key)) {
      this.comment.likes = (this.comment.likes || 0) + 1;
      localStorage.setItem(key, 'like');
      this.commentUpdate.emit();
    }
  }

  dislike() {
    const key = `voted_${this.comment.id}`;
    if (!localStorage.getItem(key)) {
      this.comment.dislikes = (this.comment.dislikes || 0) + 1;
      localStorage.setItem(key, 'dislike');
      this.commentUpdate.emit();
    }
  }

}
