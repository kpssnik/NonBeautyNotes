const cardsBlock = document.querySelector('.flexbox');
const addCardButton = document.querySelector('.add-card-btn');

// new card after clicking ADD
function getNewCard(title, content, styleClass) {

    // creating new card
    const newCard = document.createElement('div');

    newCard.classList.add('card');
    if (styleClass !== undefined)
        newCard.classList.add(styleClass);

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
            <button class="style-btn red-card-style">RED</button>
            <button class="style-btn yellow-card-style">YLW</button>
            <button class="style-btn green-card-style">GRN</button>
            <button class="style-btn default-card-style">DEF</button>
        </div>
    `;

    // TODO edit delete  event listeners //////////////////////////////////////////////////////////////////////////////////////////////////
    const deleteBtn = newCard.querySelector('.delete-card-btn');
    const editBtn = newCard.querySelector('.edit-card-btn');

    deleteBtn.addEventListener('click', () => {
        newCard.remove();
    });

    return newCard;
}

addCardButton.addEventListener('click', event => {

    cardsBlock.appendChild(getNewCard('Title', 'Content', 'default-card-style'));
});