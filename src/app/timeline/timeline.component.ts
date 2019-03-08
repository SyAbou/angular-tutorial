import { Component, OnInit, Directive, Input, ViewChild } from '@angular/core';
import { Tweet } from '../tweet';
import { User } from '../user';
import { UserBoxComponent } from '../user-box/user-box.component';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  @ViewChild(UserBoxComponent)
  user: User = {};
  tweets: Tweet[];

  constructor(private tweetsServices: TweetsService) { }

  ngOnInit() {
    this.getTweets();
  }


  onSave(text: string) {

  }
  getTweets(): void {
    this.tweets = this.tweetsServices.getTweets();
  }
}
