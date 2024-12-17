let img = {
    image1: "https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/20241205182430611626.png",
    image2: "https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/20241205182222585645.png",
    image3: "https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/20241205182350697653.png",
    image4: "https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/20240718173746809108.png",
    image5: "https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/20240718174706327775.png",
    image6: "https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/VCCMNE-3672-1-3672.png",
    image7: "https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/1689606951134265.png",
    image8: "https://c38blhej2h.execute-api.ap-south-1.amazonaws.com/dev/png/700/FLOREO-3-1-3.png"
};

// Function to create checkboxes for food items
function createButton() {
    let checkbox = document.querySelector("#container");
    for (let key in img) {
        if (img.hasOwnProperty(key)) {
            let box = document.createElement("div");
            box.classList.add(key);

            let label = document.createElement("label");
            let image = document.createElement("img");
            image.src = img[key];
            label.append(image);
            box.append(label);

            let checkboxi = document.createElement("input");
            checkboxi.type = "checkbox";
            checkboxi.id = key;
            checkboxi.name = "food";
            checkboxi.value = key;

            box.appendChild(checkboxi);
            checkbox.append(box);
        }
    }
}

createButton();

// Function to handle the order button click
function orderButton() {
    let selectedImages = [];

    // Collect selected food items (images)
    for (let key in img) {
        if (document.getElementById(key).checked) {
            selectedImages.push(img[key]);
        }
    }
    if (selectedImages.length === 0) {
        alert("Please select at least one food item.");
        return;
    }

    let orderStatus = document.createElement("div");
    orderStatus.id = "order-status";
    orderStatus.textContent = "Processing your order...";
    document.body.appendChild(orderStatus);

    // Create and handle the promise with a random delay
    orderFood(selectedImages)
        .then(message => {
            // Show success message after promise resolves
            orderStatus.textContent = message;
        })
        .catch(error => {
            // Show error message if promise fails
            orderStatus.textContent = `Error: ${error}`;
        });
}

// Function that returns a promise to simulate order processing
function orderFood(selectedImages) {
    return new Promise(function (resolve, reject) {
        const randomTime = Math.floor(Math.random() * 5 + 1) * 1000;

        setTimeout(() => {
            let message = `Your order has been processed!<br><div style="display: flex; gap: 10px; justify-content: center;">`;

            selectedImages.forEach(src => {
                message += `<img src="${src}" alt="Food" style="width: 100px; height: 100px; border-radius: 8px;">`;
            });

            message += `</div>`;
            resolve(message);
        }, randomTime);
    });
}
