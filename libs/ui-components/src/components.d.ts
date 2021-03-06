/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle names
         */
        "middle": string[];
    }
    interface MyHeader {
        /**
          * The first name
         */
        "headerTitle": string;
    }
    interface TodoInput {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyHeaderElement extends Components.MyHeader, HTMLStencilElement {
    }
    var HTMLMyHeaderElement: {
        prototype: HTMLMyHeaderElement;
        new (): HTMLMyHeaderElement;
    };
    interface HTMLTodoInputElement extends Components.TodoInput, HTMLStencilElement {
    }
    var HTMLTodoInputElement: {
        prototype: HTMLTodoInputElement;
        new (): HTMLTodoInputElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-header": HTMLMyHeaderElement;
        "todo-input": HTMLTodoInputElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle names
         */
        "middle"?: string[];
        /**
          * A custom named click handler
         */
        "onNameClicked"?: (event: CustomEvent<string>) => void;
    }
    interface MyHeader {
        /**
          * The first name
         */
        "headerTitle"?: string;
    }
    interface TodoInput {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-header": MyHeader;
        "todo-input": TodoInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-header": LocalJSX.MyHeader & JSXBase.HTMLAttributes<HTMLMyHeaderElement>;
            "todo-input": LocalJSX.TodoInput & JSXBase.HTMLAttributes<HTMLTodoInputElement>;
        }
    }
}
