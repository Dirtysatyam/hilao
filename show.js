const headername = document.getElementById('headername');
const searchForm = document.querySelector('form');
const randomButton = document.querySelector('#random'); // Assuming the random button has an ID of 'random'
let allUserData; // Store all user data globally

async function fetchAllData() {
    try {
        const response = await fetch('./allData.json');
        allUserData = await response.json();
    } catch (error) {
        console.error("Error fetching all data:", error);
        throw error;
    }
}

function fetchData(name) {
    try {
        const user = allUserData.find(entry => entry.name.toLowerCase() === name.toLowerCase());

        if (!user) {
            throw new Error(`User with name ${name} not found`);
        }

        return user;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

function updateBioSection(data) {
    const bioSection = document.getElementById("bio");
    headername.innerText = data.name;
    bioSection.innerHTML = `
    <p><strong>Name:</strong> ${data.information.name}</p>
    <p><strong>Age:</strong> ${data.information.age}</p>
    <p><strong>boobsType:</strong> ${data.information.boobsType}</p>
    <p><strong>tattoos:</strong> ${data.information.tattoos}</p>
    <p><strong>activeYears:</strong> ${data.information.activeYears}</p>
    <p><strong>cupSize:</strong> ${data.information.cupSize}</p>
    <p><strong>bodyType:</strong> ${data.information.bodyType}</p>
    <p><strong>height:</strong> ${data.information.height}</p>
    <p><strong>weight:</strong> ${data.information.weight}</p>
    <p><strong>Hazel:</strong> ${data.information.Hazel}</p>
    <p><strong>hairColor:</strong> ${data.information.hairColor}</p>
    <p><strong>anotherNames:</strong> ${data.information.anotherNames}</p>
    <p><strong>About:</strong> ${data.information.about}</p>
    `;
}

function updateSection1(data) {
    const section1 = document.getElementById("section1");
    section1.innerHTML = '';

    data.section1.forEach(gifUrl => {
        const card = document.createElement('div');
        card.classList.add('card');
        const gifImage = document.createElement('img');
        gifImage.src = gifUrl;
        gifImage.style.width = '400px';
        gifImage.style.height = '250px';
        card.appendChild(gifImage);
        section1.appendChild(card);
    });
}

function updateSection2(data) {
    const section2 = document.getElementById("section2");
    section2.innerHTML = '';

    data.section2.forEach(imageUrl => {
        const card = document.createElement('div');
        card.classList.add('card');
        const image = document.createElement('img');
        image.src = imageUrl;
        image.style.width = '300px';
        image.style.height = '450px';
        card.appendChild(image);
        section2.appendChild(card);
    });
}

function updateSection3(data) {
    const section3 = document.getElementById("section3");
    section3.innerHTML = '';

    data.section3.forEach(videoUrl => {
        const card = document.createElement('div');
        card.classList.add('card');
        const video = document.createElement('video');
        video.src = videoUrl;
        video.controls = true;
        video.style.width = '350px';
        video.style.height = '200px';
        card.appendChild(video);
        section3.appendChild(card);
    });
}

function updateSections(data) {
    updateBioSection(data);
    updateSection1(data);
    updateSection2(data);
    updateSection3(data);
}

searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const searchTerm = event.target.elements.search.value;

    try {
        const userData = await fetchData(searchTerm);
        updateSections(userData);
        searchForm.reset();
    } catch (error) {
        console.error("Error updating sections:", error);
        headername.innerText = "No Such Star";
        const bioSection = document.getElementById("bio");
        bioSection.innerHTML = '<h1>Make Sure u r writing the exact name. If u r sure then let us know ur star name , we will add her too.</h1>';
        const section1 = document.getElementById("section1");
        section1.innerHTML = '';
        const section2 = document.getElementById("section2");
        section2.innerHTML = '';
        const section3 = document.getElementById("section3");
        section3.innerHTML = '';
    }
});

function getRandomUserData() {
    const randomIndex = Math.floor(Math.random() * allUserData.length);
    return allUserData[randomIndex];
}

randomButton.addEventListener('click', function () {
    try {
        const randomUserData = getRandomUserData();
        updateSections(randomUserData);
    } catch (error) {
        console.error("Error updating sections with random data:", error);
        headername.innerText = "Error";
    }
});

fetchAllData().then(() => {
    // Initial data fetch and update
    const initialRandomUserData = getRandomUserData();
    updateSections(initialRandomUserData);
});
