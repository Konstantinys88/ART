import { getResource } from "../services/requests";

const showMoStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener("click", function() {
        getResource("http://localhost:3000/styles")
            .then(res => createCards(res))
            .catch(error => console.error(error));

            this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement("div");
            card.classList.add("animated", "fadeInUp", 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class=styles-block>
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href="#">${link}</a>
            </div>
            `;
            document.querySelector(wrapper).appendChild(card);
        });
    }


};

export default showMoStyles;


// <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
// <div class=styles-block>
//     <img src=assets/img/styles-6.jpg alt>
//     <h4>Поп-арт</h4>
//     <a href="#">Подробнее</a>
// </div>
// </div> 