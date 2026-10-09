import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    display: inline-block;
  }

  button {
    border: 0;
    border-radius: var(--my-button-radius, 0.5rem);
    background: var(--my-button-background, #2563eb);
    color: var(--my-button-color, #fff);
    cursor: pointer;
    font: inherit;
    padding: 0.625rem 1rem;
  }

  :host([appearance='secondary']) button {
    background: transparent;
    color: var(--my-button-background, #2563eb);
    box-shadow: inset 0 0 0 1px currentColor;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
  button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;
