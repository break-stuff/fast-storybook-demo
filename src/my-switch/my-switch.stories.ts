import type { MySwitch } from '.';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit-html';
import './index';

const { args, argTypes, template } = getStorybookHelpers<MySwitch>('my-switch');

export default {
  title: 'Components/Switch',
  component: 'my-switch',
  args: { ...args, 'default-slot': 'Email notifications' },
  argTypes,
  render: (storyArgs: Record<string, unknown>) => template(storyArgs),
};

export const Default = {};
export const On = { args: { checked: true } };
export const Disabled = { args: { disabled: true, checked: true } };

export const LitTemplate = {
  render: () => html`<my-switch checked>Quiet mode</my-switch>`,
};
