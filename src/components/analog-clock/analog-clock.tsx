import { Component, h } from '@stencil/core';

@Component({
  tag: 'analog-clock'
})
export class AnalogClock {
  render() {
    return (
      <div>
        <clock-display hours={8} minutes={21} seconds={29}/>
      </div>
    );
  }
}
