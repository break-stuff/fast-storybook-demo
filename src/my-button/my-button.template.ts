import { html } from '@microsoft/fast-element';
import { MyButton } from '.';

export const template = html<MyButton>`
  <template>
    <button
      part="button"
      type="${x => x.type}"
      ?disabled="${x => x.disabled}"
      aria-disabled="${x => x.disabled}"
      @click="${x => x.activate()}"
    >
      <slot></slot>
    </button>
  </template>
`;
