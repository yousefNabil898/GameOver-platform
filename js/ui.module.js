let gamesSection = document.querySelector('.row');
import { Detailes } from "./detalis.js";


export class getData {
    constructor() {
        this.links = document.querySelectorAll('.nav-link');
        this.start(this.links);

    }

    start(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', () => {
                const data = arr[i].id;
                this.GetData(data);
            });
        }
    }

    async GetData(category) {
        $('.loading').fadeIn(0, function () {
            $('body').css({ 'overflow': 'visible' });
        });

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '698221ca35msha458dc2d1cf52d9p14db8fjsn71c90f537fdb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            this.display(result);

            document.querySelectorAll('.card').forEach((card) => {
                card.addEventListener('click', () => {
                    $('.loading').fadeIn(800, function () {
                        document.querySelector('.details').classList.remove('d-none')
                        $('body').css({ 'overflow': 'hidden' });
                        $('.details').css({ 'overflow': 'auto' });

                        new Detailes(card.dataset.id)
                    });
                    $('.loading').fadeOut(800)

                });
            });

            $('.loading').fadeOut(1000, function () {
                $('body').css({ 'overflow': 'visible' });
            });

        } catch (error) {
            console.error(error);
        }
    }

    display(gamesData) {
        let cartoona = ``;

        for (let i = 0; i < gamesData.length; i++) {
            cartoona += `
                <div class="col-md-3 col-sm-4">
                    <div class="card bg-main text-white p-2" data-id="${gamesData[i].id}">
                        <img src="${gamesData[i].thumbnail}" class="card-img-top" alt="${gamesData[i].title}">
                        <div class="card-body ps-1 pe-1 d-flex flex-column justify-content-evenly">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h5 class="card-title m-0 ">${gamesData[i].title}</h5>
                                <span class="bg-secondary ps-2 pe-2 rounded-2 text-center">Free</span>
                            </div>
                            <p class="card-text text-center ">${gamesData[i].short_description}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span class="bg-primary ps-2 pe-2 rounded-2 text-center fs-15 ">${gamesData[i].genre}</span>
                            <span class="bg-primary ps-2 pe-2 rounded-2 text-center fs-15 text-nowrap">${gamesData[i].platform}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        gamesSection.innerHTML = cartoona;
    }
}

