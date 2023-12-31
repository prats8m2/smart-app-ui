import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root',
})
export class DialogService {
	constructor() {}

	openConfirmDialog() {
		const result = Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#34c38f',
			cancelButtonColor: '#f46a6a',
			confirmButtonText: 'Yes, delete!',
			allowOutsideClick: false,
			showCloseButton: true,
		});
		return result;
	}
}
