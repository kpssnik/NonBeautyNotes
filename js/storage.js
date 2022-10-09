'use strict';

// localStorage functionality
window.storage = {

    // add new card or update existing 
    setCard: (cardElement) => {

        const obj = cards.toObject(cardElement);

        localStorage.setItem(obj.id, JSON.stringify(obj));
    },

    removeCard: (cardId) => {
        localStorage.removeItem(cardId);
    },

    // gets array of saved cardElements from localStorage 
    getCards: () => {

        let cards = [];

        const storageContent = { ...localStorage };

        for (let id in storageContent) {

            const obj = JSON.parse(localStorage[id]);

            const card = window.cards.getCardElement(obj.title, obj.content, obj.style, id);
            cards.push(card);
        }

        return cards;
    }
};