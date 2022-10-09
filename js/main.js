'use strict';

function main() {

    // card container
    const cardsElement = document.querySelector('.flexbox');
    // add new card
    const addCardButton = document.querySelector('.add-card-btn');

    // creates new card with random title, shows it and saves to storage
    addCardButton.addEventListener('click', () => {

        const newCard = cards.getCardElement('title#' + service.generateId(2), 'content', 'default');
        cardsElement.appendChild(newCard);

        storage.setCard(newCard);
    });


    // render cards on page from storage
    const loadedCards = storage.getCards();
    loadedCards.forEach(card => {
        cardsElement.appendChild(card);
    });
}



main();