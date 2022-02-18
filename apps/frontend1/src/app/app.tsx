import React from 'react';

// this import uses path mapping under the hood and utilizes Stencil's React bindings
import { MyComponent, MyHeader, TodoInput } from 'ui-components-react';

export const App = () => {
  return (
    <>
      <MyHeader headerTitle="TODO" />
      <TodoInput />
      <MyComponent
        first="a Web Component / Custom Element"
        middle={[
          'with complex prop passing and easy event binding',
          'for React',
        ]}
        last="thanks to Stencil"
        onNameClicked={(e) => alert(e.detail)}
      />
    </>
  );
};

export default App;
