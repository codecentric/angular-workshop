import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
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

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.setupInterval();
    this.sendHttpRequests();
    this.setupSubject();
  }

  setupInterval() {
    this.interval$ = interval(1000);

    // first subscription
    this.intervalSubscription1 = this.interval$.subscribe((value) => {
      console.log(`subscriber 1 received: ${value}`);
      this.intervalSubscriber1Value = value;
    });

    // second subscription after 5 seconds
    setTimeout(() => {
      this.intervalSubscription2 = this.interval$.subscribe((value) => {
        console.log('subscriber 2 received: ' + value);
        this.intervalSubscriber2Value = value;
      });
    }, 5000);
  }

  setupSubject() {
    this.behaviourSubject$ = new BehaviorSubject(0);
    this.subjectSubscription1 = this.behaviourSubject$.subscribe((value) => {
      console.log('subject subscriber 1 received value : ' + value);
      this.subjectSubscriber1Value = value;
    });

    this.nextSubjectValue();
    this.nextSubjectValue();

    this.addSecondSubjectSubscription();

    this.nextSubjectValue();
    this.nextSubjectValue();
  }

  addSecondSubjectSubscription() {
    this.subjectSubscription2 = this.behaviourSubject$.subscribe((value) => {
      console.log('subject subscriber 2 received value : ' + value);
      this.subjectSubscriber2Value = value;
    });
  }

  nextSubjectValue() {
    this.behaviourSubject$.next(this.behaviourSubject$.value + 1);
  }

  toggleSecondSubjectSubscriber() {
    if (!this.subjectSubscription2.closed) {
      this.subjectSubscription2.unsubscribe();
      this.subjectSubscriber2Value = 0;
    } else {
      console.log('created new subscription');
      this.addSecondSubjectSubscription();
    }
  }

  sendHttpRequests() {
    const httpRequest$ = this.http.get('https://google.com');

    httpRequest$.subscribe();
    httpRequest$.subscribe();
  }

  ngOnDestroy(): void {
    this.intervalSubscription1?.unsubscribe();
    this.intervalSubscription2?.unsubscribe();
    this.subjectSubscription1?.unsubscribe();
    this.subjectSubscription2?.unsubscribe();
  }
}
