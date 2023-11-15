import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
	@Input() message: string = '';
	@Output() confirm = new EventEmitter<void>();
	@Output() cancel = new EventEmitter<void>();

	onConfirm() {
		this.confirm.emit();
	}

	onCancel() {
		this.cancel.emit();
	}
}
