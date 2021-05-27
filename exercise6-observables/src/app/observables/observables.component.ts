import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit {
  // Interval-Observable and Variables for Subscribers
  interval$: Observable<number>;

  intervalSubscription1: Subscription;
  intervalSubscriber1Value: number;

  intervalSubscription2: Subscription;
  intervalSubscriber2Value: number;

  // BehaviourSubject and Variables for Subscribers
  behaviourSubject$: BehaviorSubject<number>;

  subjectSubscription1: Subscription;
  subjectSubscriber1Value: number;

  subjectSubscription2: Subscription;
  subjectSubscriber2Value: number;
  isSecondSubscriptionActive = true;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.setupInterval();
    this.setupSubject();
  }

  setupInterval() {
    // TODO: initialize this.interval$
    // TODO: add first subscription
    // TODO: add second subscription after 5 seconds
  }

  setupSubject() {
    // TODO: initialize this.behaviourSubject$
    // TODO: add subscriptions
  }

  nextSubjectValue() {
    throw Error('not implemented!');
  }

  toggleSecondSubjectSubscriber() {
    throw Error('not implemented!');
  }
}
