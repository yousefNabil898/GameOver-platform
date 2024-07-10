
export class Detailes {
    constructor(id) {

        this.closeBtn = document.querySelector('.fa-arrow-right').addEventListener('click', () => {
            document.querySelector('.details').classList.add('d-none')
            $('body').css({ 'overflow': 'visible' });


        })

        this.getGame(id)
    }

    async getGame(id) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
            this.displayGame(result)

        } catch (error) {
            console.error(error);
        }
    }

    displayGame(Game) {
        const detailsBox = `
        
        <div class="col-md-4 ">
        <figure>
           <img src="${Game.thumbnail}" class="w-100" alt="details image" />
        </figure>
     </div>
     <div class="col-md-8">
     
        <div class ="text-white">
   
     
           <h1>${Game.title}</h1>
     
           <h3>About ${Game.title}</h3>
           <p>${Game.description}</p>
     
           
        </div>
     </div>
     
        `;

        document.getElementById("detailsData").innerHTML = detailsBox;

    }


}
