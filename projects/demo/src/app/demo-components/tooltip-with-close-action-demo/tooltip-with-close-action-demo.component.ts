import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  signal,
} from '@angular/core';

import { NgxTooltipComponent } from '@controllable-ui/ngx-tooltip';

@Component({
    selector: 'app-tooltip-with-close-action-demo',
    imports: [CommonModule, NgxTooltipComponent],
    templateUrl: './tooltip-with-close-action-demo.component.html',
    styleUrl: './tooltip-with-close-action-demo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipWithCloseActionDemoComponent {
  scrollableContainer = input<ElementRef>();

  dialogIsOpen = signal<boolean>(false);

  handleOpen$ = () => {
    this.dialogIsOpen.set(true);
  };

  handleClose$ = () => {
    this.dialogIsOpen.set(false);
  };
}
