import { html } from '@microsoft/fast-element';
import { MyBadge } from '.';

export const template = html<MyBadge>`
  <template>
    <span part="badge" role="status"><slot></slot></span>
  </template>
`;
