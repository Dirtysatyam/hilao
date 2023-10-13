const headername= document.getElementById('headername')

async function fetchData() {
    try {
        // Assuming 'allData.json' is in the same directory as your HTML file
        const response = await fetch('./allData.json');
        const userData = await response.json();

        // Generate a random number between 1 and 100
        const randomIndex = Math.floor(Math.random() * 33) + 1;

        return userData[randomIndex - 1]; // Adjust for zero-based index
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Propagate the error for better error handling
    }
}

function updateBioSection(data) {
    const bioSection = document.getElementById("bio");
    headername.innerText=data.name;
    bioSection.innerHTML = `
    
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
   
`;}

function updateSection1(data) {
    const section1 = document.getElementById("section1");

    // Clear existing content in the container
    section1.innerHTML = '';

    // Assuming data.section1 is an array of GIF URLs
    data.section1.forEach(gifUrl => {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card'); // You might want to add some styling for the card

        // Create an image element for the GIF
        const gifImage = document.createElement('img');
        gifImage.src = gifUrl;
        gifImage.style.width = '400px'; // Set a fixed width
        gifImage.style.height = '250px'; // Set a fixed height

        // Append the image to the card
        card.appendChild(gifImage);

        // Append the card to the container
        section1.appendChild(card);
    });
}


function updateSection2(data) {
    const section2 = document.getElementById("section2");

    // Clear existing content in the container
    section2.innerHTML = '';

    // Assuming data.section2 is an array of image URLs
    data.section2.forEach(imageUrl => {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card'); // You might want to add some styling for the card

        // Create an image element for the image
        const image = document.createElement('img');
        image.src = imageUrl;
        image.style.width = '300px'; // Set a fixed width
        image.style.height = '450px'; // Set a fixed height

        // Append the image to the card
        card.appendChild(image);

        // Append the card to the container
        section2.appendChild(card);
    });
}


function updateSection3(data) {
    const section3 = document.getElementById("section3");

    // Clear existing content in the container
    section3.innerHTML = '';

    // Assuming data.section3 is an array of video URLs
    data.section3.forEach(videoUrl => {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('card'); // You might want to add some styling for the card

        // Create a video element
        const video = document.createElement('video');
        video.src = videoUrl;
        video.controls = true;
        video.style.width = '350px'; // Set a fixed width for the video
        video.style.height = '200px'; // Set a fixed height for the video

        // Append the video to the card
        card.appendChild(video);

        // Append the card to the container
        section3.appendChild(card);
    });
}


async function updateSections() {
    try {
        const userData = await fetchData();

        // Call the update functions with the fetched data
        updateBioSection(userData);
        updateSection1(userData);
        updateSection2(userData);
        updateSection3(userData);
    } catch (error) {
        console.error("Error updating sections:", error);
    }
}

// Call the function to initiate the update process
updateSections();
