const addImg = (img) => {
    document.body.appendChild(img);
}

function loadImageCallback(url, callback) {
    let image = new Image();

    image.onload = function() {
        callback(null, image);
    }

    image.onerror = function() {
        let message = 'Could not load image at ' + url;
        callback(new Error(message));
    }

    image.src = url;
}

function loadImagePromise(url) {
    return new Promise((resolve, reject) => {
        let image = new Image();

        image.onload = function() {
            resolve(image);
        }

        image.onerror = function() {
            let message = 'Could not load image at ' + url;
            reject(new Error(message));
        }

        image.src = url;
    });
}

//
// const request = new XMLHttpRequest();
// request.open('GET', 'https://api.thecatapi.com/v1/images/search', true);
//
// request.onload = function() {
//     if (this.status >= 200 && this.status < 400) {
//         // Success!
//         let data = JSON.parse(this.response);
//         console.log(data);
//         loadImagePromise(data[0].url).then((img) => addImg(img));
//     } else {
//         // We reached our target server, but it returned an error
//     }
// };
//
// request.onerror = function() {
//     // There was a connection error of some sort
// };
//
// request.send();

fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    }).then((data) =>{
        loadImagePromise(data[0].url).then((img) => addImg(img))
    })
    .catch(err => console.log('Error message:', err));
