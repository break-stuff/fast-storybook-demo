import type { MyBadge } from '.';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import './index';

const { args, argTypes, template } = getStorybookHelpers<MyBadge>('my-badge');

export default {
  title: 'Components/Badge',
  component: 'my-badge',
  args: { ...args, 'default-slot': 'Active' },
  argTypes,
  render: (storyArgs: Record<string, unknown>) => template(storyArgs),
};

export const Default = {};
export const Success = { args: { appearance: 'success' } };
export const Warning = {
  args: { appearance: 'warning', 'default-slot': 'Needs review' },
};
