import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'my-header',
  styleUrl: 'my-header.scss',
  shadow: true
})
export class MyHeader {
  /**
   * The first name
   */
  @Prop() headerTitle: string;

  render() {
   
    return <div><h1 class="header">{this.headerTitle}</h1></div>;
  }
}
