import { FASTElement, attr, customElement } from '@microsoft/fast-element';
import { template } from './my-badge.template';
import { styles } from './my-badge.styles';

/**
 * A small label for status, category, or metadata.
 *
 * @summary Communicates a compact status or category.
 * @tag my-badge
 * @slot default - Badge text.
 * @csspart badge - The badge surface.
 * @cssprop {<color>} [--my-badge-background=#e5e7eb] - Badge background color.
 * @cssprop {<color>} [--my-badge-color=#1f2937] - Badge text color.
 */
@customElement({ name: 'my-badge', template, styles })
export class MyBadge extends FASTElement {
  /** Visual treatment for the badge. */
  @attr appearance = 'neutral';
}
