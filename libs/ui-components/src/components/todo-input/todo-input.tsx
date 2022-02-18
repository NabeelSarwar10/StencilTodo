import { Component, h } from '@stencil/core';
@Component({
  tag: 'todo-input',
  styleUrl: 'todo-input.scss',
  shadow: true,
})
export class TodoInput {
  render() {
    return (
      <div class="input-container">
          <h4>Add Todo</h4>
        <input class="input" placeholder="Add a new task here..." />
        <button class="add-btn">Add</button>
      </div>
    );
  }
}
