import { FASTElement, attr, customElement } from '@microsoft/fast-element';
import { template } from './my-button.template';
import { styles } from './my-button.styles';

/**
 * A compact action button with a native button interaction model.
 *
 * @summary Triggers an action when activated.
 * @tag my-button
 * @slot default - The button label.
 * @event {CustomEvent} button-click - Fired after the button is activated.
 * @cssprop {<color>} [--my-button-background=#2563eb] - Button background color.
 * @cssprop {<color>} [--my-button-color=#ffffff] - Button text color.
 * @cssprop [--my-button-radius=0.5rem] - Button corner radius.
 */
@customElement({ name: 'my-button', template, styles })
export class MyButton extends FASTElement {
  /** Visual treatment for the button. */
  @attr appearance = 'primary';

  /** Prevents the button from being activated. */
  @attr({ mode: 'boolean' }) disabled = false;

  /** Native button type. */
  @attr type = 'button';

  /** Activates the button and emits its component event. */
  activate(): void {
    if (!this.disabled) {
      this.$emit('button-click', { source: this });
    }
  }
}
