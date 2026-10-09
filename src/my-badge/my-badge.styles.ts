import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    display: inline-block;
  }
  span {
    display: inline-flex;
    border-radius: 999px;
    background: var(--my-badge-background, #e5e7eb);
    color: var(--my-badge-color, #1f2937);
    font: 600 0.75rem/1 var(--my-badge-font, system-ui, sans-serif);
    padding: 0.375rem 0.625rem;
  }
  :host([appearance='success']) span {
    background: #dcfce7;
    color: #166534;
  }
  :host([appearance='warning']) span {
    background: #fef3c7;
    color: #92400e;
  }
  :host([appearance='danger']) span {
    background: #fee2e2;
    color: #991b1b;
  }
`;
