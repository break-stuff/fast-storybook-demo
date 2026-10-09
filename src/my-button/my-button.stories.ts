import type { MyButton } from '.';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import { html } from 'lit-html';
import './index';

const { args, argTypes, template } = getStorybookHelpers<MyButton>('my-button');

export default {
  title: 'Components/Button',
  component: 'my-button',
  args: { ...args, 'default-slot': 'Continue' },
  argTypes,
  render: (storyArgs: Record<string, unknown>) => template(storyArgs),
};

export const Default = {};
export const Secondary = {
  args: { appearance: 'secondary', 'default-slot': 'Cancel' },
};
export const Disabled = { args: { disabled: true } };

export const LitTemplate = {
  render: () => html`<my-button appearance="secondary">Save draft</my-button>`,
};
