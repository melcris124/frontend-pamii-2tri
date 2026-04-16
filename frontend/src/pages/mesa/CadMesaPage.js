import './CadMesaPage.css';
import { createHeader } from '../../shared/Header.js';
import { logout } from '../../shared/util.js';

const pageName = 'Cadastrar Mesa';

class CadMesaPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <ion-content class="ion-padding">
                <form id="form-mesa">
                    <ion-list>
                        <ion-item>
                            <ion-input type="number" name="id_mesa" label="Número da Mesa (ID)" label-placement="floating" required></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input type="number" name="atd_cadeiras" label="Qtd Cadeiras" label-placement="floating" required></ion-input>
                        </ion-item>
                    </ion-list>
                    <div class="ion-padding">
                        <ion-button expand="block" type="submit" class="ion-margin-top">
                            <ion-icon name="checkmark-circle" slot="start"></ion-icon>
                            Salvar Mesa
                        </ion-button>
                        <ion-button expand="block" color="danger" id="btn-cancelar">
                            <ion-icon name="close-circle" slot="start"></ion-icon>
                            Cancelar
                        </ion-button>
                    </div>
                </form>
            </ion-content>
        `;

        this.querySelector('#logout-btn').addEventListener('click', logout);
        this.querySelector('#btn-cancelar').addEventListener('click', () => window.history.back());
        
        this.querySelector('#form-mesa').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            console.log('Dados salvos:', Object.fromEntries(formData));
            window.history.back();
        });
    }
}

customElements.define('cad-mesa-page', CadMesaPage);