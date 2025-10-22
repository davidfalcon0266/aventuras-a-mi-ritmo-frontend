import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  success = false;
  error = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\\s]+$/)
      ]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Elimina caracteres ilegales en tiempo real
  onNameInput(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\\s]/g, '');
    this.contactForm.get('name')?.setValue(input.value, { emitEvent: false });
  }

  onSubmit(): void {
    this.submitted = true;
    this.success = false;
    this.error = false;

    if (this.contactForm.invalid) return;

    this.loading = true;
    this.contactService.sendContactForm(this.contactForm.value).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        this.contactForm.reset();
        this.submitted = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
