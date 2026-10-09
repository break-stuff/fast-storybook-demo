import { FASTElement, attr, customElement } from '@microsoft/fast-element';
import { template } from './my-switch.template';
import { styles } from './my-switch.styles';

/**
 * A two-state control for enabling or disabling a setting.
 *
 * @summary Toggles a setting on or off.
 * @tag my-switch
 * @slot default - The setting label.
 * @event {CustomEvent} switch-change - Fired when the checked state changes.
 * @csspart control - The native checkbox control.
 * @csspart track - The switch track.
 * @csspart thumb - The switch thumb.
 * @csspart label - The switch label wrapper.
 * @cssprop {<color>} [--my-switch-color=#2563eb] - Checked track color.
 */
@customElement({ name: 'my-switch', template, styles })
export class MySwitch extends FASTElement {
  /** Whether the switch is on. */
  @attr({ mode: 'boolean' }) checked = false;

  /** Prevents the switch from changing. */
  @attr({ mode: 'boolean' }) disabled = false;

  /** Updates the checked state and emits a change event. */
  toggle(event: Event): void {
    if (this.disabled) return;
    this.checked = (event.currentTarget as HTMLInputElement).checked;
    this.$emit('switch-change', { checked: this.checked });
  }
}
