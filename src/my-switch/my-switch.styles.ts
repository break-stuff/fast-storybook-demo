import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    display: inline-block;
  }
  label {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    gap: 0.5rem;
  }
  input {
    position: absolute;
    opacity: 0;
  }
  [part='track'] {
    background: #9ca3af;
    border-radius: 999px;
    box-sizing: border-box;
    height: 1.5rem;
    position: relative;
    transition: background 120ms ease;
    width: 2.75rem;
  }
  [part='thumb'] {
    background: #fff;
    border-radius: 50%;
    height: 1.125rem;
    left: 0.1875rem;
    position: absolute;
    top: 0.1875rem;
    transform: translateX(0);
    transition: transform 120ms ease;
    width: 1.125rem;
  }
  input:checked + [part='track'] {
    background: var(--my-switch-color, #2563eb);
  }
  input:checked + [part='track'] [part='thumb'] {
    transform: translateX(1.25rem);
  }
  input:focus-visible + [part='track'] {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
  input:disabled ~ * {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;
