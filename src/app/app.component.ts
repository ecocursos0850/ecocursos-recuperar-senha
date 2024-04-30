import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Toastify from 'toastify-js';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecuperarSenhaService } from './services/recuperar-senha.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule]
})
export class AppComponent {
  
  form!: FormGroup;

  constructor(private service: RecuperarSenhaService) {
    this.form = new FormGroup({
      cpf: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required)
    });
  }

  get cpf() {
    return this.form.get("cpf");
  }

  get dataNascimento() {
    return this.form.get("dataNascimento");
  }

  onSubmit = () => {
    this.dataNascimento?.setValue(this.dataNascimento?.value + "T00:00:00");
    console.log(this.dataNascimento?.value);
    this.service.recuperarSenha(this.form.value).subscribe({
      next: () => {
        Swal.fire({
          title: "Senha alterada com sucesso",
          text: "Nova senha: 123@@Mudar",
          icon: "success"
        });
      },
      error: (err) => window.alert(err.error.message)
    });
  }

}
