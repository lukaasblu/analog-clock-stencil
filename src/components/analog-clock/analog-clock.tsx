import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'analog-clock'
})
export class AnalogClock {
  timer: number;

  @State() time: number = Date.now();

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 250);
  }

  componentDidUnload() {
    clearInterval(this.timer);
  }

  get hours(): number {
    return new Date().getHours();
  }

  get minutes(): number {
    return new Date().getMinutes();
  }

  get seconds(): number {
    return new Date().getSeconds();
  }

  render() {
    return (
      <div>
        <clock-display hours={this.hours} minutes={this.minutes} seconds={this.seconds}/>
      </div>
    );
  }
}
