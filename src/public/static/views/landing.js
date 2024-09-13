import abstractView from "./abstractView.js";

export default class extends abstractView {

    constructor(){
        super();
        this.setTitle("Tugas Desain ANalisis Algoritma");

    }

    async getHtml(){
        return  `
            <div class="web-explanation">
                <div class="content-title">
                    <h1>TUGAS DESAIN ANALISIS ALGORITMA</h1>
                </div>
                <div class="content-subtitle">
                    <h3>Coin Change dan 20-Solver</h3>
                </div>
                <div class="content-description">
                    <h4>Implementasi Greedy Algorithm di kasus "Coin Change" dan implementasi Brute Force di kasus "20 - Solver"  </h4>
                </div>
                <br>
                <h2>Coba Sekarang:</h2>
                <div class="button-container">
                    <section>
                        <a class="button first-button" href="/coinchange">Coin Change</a>
                        <span  class="first-description">
                            <h4> - implementasi Greedy Algorithm</h4>
                        </span>
                    </section>
                    <section>
                        <a class="button second-button" href="/twentysolver">20 - Solver</a>
                        <span class="second-description">
                            <h4> - implementasi Brtue Force</h4>
                        </span>
                    </section> 
                    <h5>by:<br>- Naufal Hisyam Muzakki (L0123106)<br>- Mukhlis abdurrahman (L0123100-)  </h5>                       
                </div>
            </div>
            <div class ="main-image">
                <img src="static/assets/cube.png">
            </div>
        
        `

    }

}