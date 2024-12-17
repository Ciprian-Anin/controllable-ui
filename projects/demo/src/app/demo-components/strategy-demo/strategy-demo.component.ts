import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Placement } from '@controllable-ui/ngx-tooltip';

import { BasicTooltipComponent } from '../basic-tooltip/basic-tooltip.component';

@Component({
  selector: 'app-strategy-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, BasicTooltipComponent],
  templateUrl: './strategy-demo.component.html',
  styleUrl: './strategy-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrategyDemoComponent {
  scrollableContainerElement = input<ElementRef>();

  strategy = signal<'default' | 'considerKeepingCurrentPlacement'>('default');
  placement = signal<Placement>('bottom');
}
