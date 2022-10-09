'use strict';

// card functionality
window.cards = {

    // create card element using given title, content and style
    // adding event listeners to all card buttons
    getCardElement: (title, content, style, id) => {

        const cardElement = document.createElement('div');
        if (id === undefined) {
            id = service.generateId(5);
        }

        cardElement.setAttribute('card-style', style);
        cardElement.setAttribute('card-id', id);

        cardElement.classList.add('card', 'card-' + style);

        cardElement.innerHTML = `
            <div class="card-header">
                <h3>${title}</h3>
                <div>
                    <button class="btn edit-card-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn delete-card-btn"><i class="fa-sharp fa-solid fa-trash"></i></button>
                </div>
            </div>
            <div class="card-main">
                <p class="card-main-content">${content}</p>
            </div>
            <div class="card-footer">
                <button class="style-btn card-red" give-style="red">RED</button>
                <button class="style-btn card-yellow" give-style="yellow">YLW</button>
                <button class="style-btn card-green" give-style="green">GRN</button>
                <button class="style-btn card-default" give-style="default">DEF</button>
            </div>
        `;

        //////////////////////////////////

        const deleteButton = cardElement.querySelector('.delete-card-btn');
        const editButton = cardElement.querySelector('.edit-card-btn');
        const styleButtons = cardElement.querySelectorAll('.style-btn');

        // delete button from visual and storage
        deleteButton.addEventListener('click', () => {
            cardElement.remove();
            window.storage.removeCard(id);
        });
        // summon edit input
        editButton.addEventListener('click', () => {
            // ...
        });
        // change card style
        styleButtons.forEach(sb => {
            sb.addEventListener('click', event => {

                const card = sb.parentNode.parentNode;
                const style = sb.getAttribute('give-style');

                cards.updateCardStyle(card, style);          
            });
        });

        return cardElement;
    },


    // accepts style given in attribute card-style (red/green/yellow/default)
    updateCardStyle: (cardElement, style) => {

        cardElement.className = '';
        cardElement.setAttribute('card-style', style);
        cardElement.classList.add('card', 'card-' + style);

        window.storage.setCard(cardElement);
    },


    // transforms cardElement to object containing only needed info
    toObject: (cardElement) => {
        const titleElement = cardElement.querySelector('.card-header h3');
        const contentElement = cardElement.querySelector('.card-main-content');
        const cardStyle = cardElement.getAttribute('card-style');
        const cardId = cardElement.getAttribute('card-id');

        return {
            title: titleElement.innerText,
            content: contentElement.innerText,
            style: cardStyle,
            id: cardId
        };
    }

};