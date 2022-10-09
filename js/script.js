// card container
const cardsBlock = document.querySelector('.flexbox');
// left top button adding new card
const addCardButton = document.querySelector('.add-card-btn');

// return card element with given title, content and style
function getNewCard(title, content, style) {

    // creating new card
    const newCard = document.createElement('div');

    newCard.classList.add('card', style);
    newCard.setAttribute('card-style', style);

    newCard.innerHTML = `
        <div class="card-header">
            <h3>${title}</h3>
            <div>
                <button class="btn edit-card-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn delete-card-btn"><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>
        </div>
        <div class="card-main">
            <p class="card-main-content">
                ${content}
            </p>
        </div>
        <div class="card-footer">
            <button class="style-btn red-card-style" card-style="red-card-style">RED</button>
            <button class="style-btn yellow-card-style" card-style="yellow-card-style">YLW</button>
            <button class="style-btn green-card-style" card-style="green-card-style">GRN</button>
            <button class="style-btn default-card-style" card-style="default-card-style">DEF</button>
        </div>
    `;

    // TODO edit delete  event listeners //////////////////////////////////////////////////////////////////////////////////////////////////
    const deleteBtn = newCard.querySelector('.delete-card-btn');
    const editBtn = newCard.querySelector('.edit-card-btn');
    const styleBtns = newCard.querySelectorAll('.style-btn');

    deleteBtn.addEventListener('click', () => {
        newCard.remove();
        updateLocalStorage();
    });

    styleBtns.forEach(btn => {
        btn.addEventListener('click', onCardStyleButtonClicked);
    });

    return newCard;
}

// transform given cardElement to object
function cardToObject(cardElement) {

    const titleElement = cardElement.querySelector('.card-header h3');
    const contentElement = cardElement.querySelector('.card-main-content');
    const cardStyle = cardElement.getAttribute('card-style');

    return {
        title: titleElement.innerHTML,
        content: contentElement.innerHTML,
        style: cardStyle
    };
}

// transform all html cards to object array
function getCardObjectArray() {

    let result = [];

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        const cardObj = cardToObject(card);
        result.push(cardObj);
    });

    return result;
}

// rewrite local storage (calling after adding/deleting/editing card)
function updateLocalStorage() {
    localStorage.cardsData = JSON.stringify(getCardObjectArray());
}

// render cards from local storage (after loading page)
function renderCardsFromStorage() {

    let cards = JSON.parse(localStorage.cardsData);

    cards.forEach(card => {
        cardsBlock.append(getNewCard(card.title, card.content, card.style));
    });
}

function onCardStyleButtonClicked(event) {

    const button = event.target;
    const card = button.parentNode.parentNode;
    const style = button.getAttribute('card-style');

    updateCardDesing(card, style);
}

function updateCardDesing(card, style) {

    card.className = '';
    card.classList.add('card', style);
    card.setAttribute('card-style', style);
}


addCardButton.addEventListener('click', () => {
    cardsBlock.appendChild(getNewCard('Title', 'Content', 'default'));

    updateLocalStorage();
});


