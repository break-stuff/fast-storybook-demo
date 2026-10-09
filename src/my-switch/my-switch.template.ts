import { html } from '@microsoft/fast-element';
import { MySwitch } from '.';

export const template = html<MySwitch>`
  <template>
    <label part="label">
      <input
        part="control"
        type="checkbox"
        role="switch"
        :checked="${x => x.checked}"
        ?disabled="${x => x.disabled}"
        @change="${(x, c) => x.toggle(c.event)}"
      />
      <span part="track"><span part="thumb"></span></span>
      <span part="text"><slot></slot></span>
    </label>
  </template>
`;
