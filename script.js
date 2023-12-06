document.addEventListener('DOMContentLoaded', function () {
    const selectedCharacters = document.getElementById('selectedCharacters');
    const allCharacters = document.getElementById('allCharacters');

    const characters = [
        'Character 1',
        'Character 2',
        'Character 3',
        'Character 4',
        // Add more characters as needed
    ];

    // Populate all characters list
    characters.forEach(character => {
        const li = document.createElement('li');
        li.textContent = character;
        li.addEventListener('click', () => addToSquad(character));
        allCharacters.appendChild(li);
    });

    // Function to add a character to the squad
    function addToSquad(character) {
        const squadLi = document.createElement('li');
        squadLi.textContent = character;
        squadLi.addEventListener('click', () => removeFromSquad(squadLi));
        selectedCharacters.appendChild(squadLi);

        // Remove the character from the available characters list
        const characterIndex = characters.indexOf(character);
        if (characterIndex !== -1) {
            characters.splice(characterIndex, 1);
            updateCharacterList();
        }
    }

    // Function to remove a character from the squad
    function removeFromSquad(squadLi) {
        const character = squadLi.textContent;
        squadLi.remove();

        // Add the character back to the available characters list
        characters.push(character);
        updateCharacterList();
    }

    // Function to update the available characters list
    function updateCharacterList() {
        allCharacters.innerHTML = '';
        characters.forEach(character => {
            const li = document.createElement('li');
            li.textContent = character;
            li.addEventListener('click', () => addToSquad(character));
            allCharacters.appendChild(li);
        });
    }
});
