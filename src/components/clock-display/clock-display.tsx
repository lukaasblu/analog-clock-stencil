import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'clock-display'
})
export class ClockDisplay {
  @Prop() hours: number;
  @Prop() minutes: number;
  @Prop() seconds: number;

  hoursToDegrees(): number {
    return Math.floor(this.minutes / 2) + (this.hours * 30);
  }

  minutesToDegrees(): number {
    return Math.floor(this.seconds / 10) + (this.minutes * 6);
  }

  secondsToDegrees(): number {
    return this.seconds * 6;
  }

  render() {
    return (
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="95" stroke-width="10px" stroke="black" fill="transparent"/>
        <line id="hour-hand" transform={`rotate(${this.hoursToDegrees()}, 100, 100)`} x1="100" y1="100" x2="100" y2="60" stroke="black" stroke-width="10" stroke-linecap="round"/>
        <line id="minute-hand" transform={`rotate(${this.minutesToDegrees()}, 100, 100)`} x1="100" y1="100" x2="100" y2="30" stroke="black" stroke-width="8" stroke-linecap="round"/>
        <line id="second-hand" transform={`rotate(${this.secondsToDegrees()}, 100, 100)`} x1="100" y1="100" x2="100" y2="30" stroke="black" stroke-width="2" stroke-linecap="round"/>
      </svg>
    );
  }
}
