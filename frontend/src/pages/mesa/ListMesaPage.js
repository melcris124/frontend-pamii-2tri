import './ListMesaPage.css';
import { createHeader } from '../../shared/Header.js';
import { logout } from '../../shared/util.js';
import { mesasMock } from '../../mock/mesasMock.js';

const pageName = 'Listagem de Mesas';

class ListMesaPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <ion-content class="ion-padding">
                <div class="list-mesa"></div>
                
                <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                    <ion-fab-button href="#/cad-mesa">
                        <ion-icon name="add"></ion-icon>
                    </ion-fab-button>
                </ion-fab>
            </ion-content>
        `;

        this.querySelector('#logout-btn').addEventListener('click', logout);
        this.renderMesas(mesasMock);
    }

    renderMesas(mesas) {
        const container = this.querySelector(".list-mesa");
        if (!mesas || mesas.length === 0) {
            container.innerHTML = '<p class="ion-text-center">Nenhuma mesa encontrada.</p>';
            return;
        }

        let html = '<ion-list>';
        mesas.forEach(mesa => {
            const corStatus = mesa.status === 'disponivel' ? 'success' : 'danger';
            html += `
                <ion-item>
                    <ion-icon name="restaurant-outline" slot="start"></ion-icon>
                    <ion-label>
                        <h2>Mesa ${mesa.id_mesa}</h2>
                        <p>Capacidade: ${mesa.qtd_cadeiras} cadeiras</p>
                    </ion-label>
                    <ion-badge color="${corStatus}" slot="end">
                        ${mesa.status.toUpperCase()}
                    </ion-badge>
                </ion-item>`;
        });
        html += '</ion-list>';
        container.innerHTML = html;
    }
}

customElements.define('list-mesa-page', ListMesaPage);
