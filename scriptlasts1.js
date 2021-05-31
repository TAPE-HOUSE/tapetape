'use strict'
window.addEventListener('load', function() {

    var table = document.querySelector("#movies");

    // setInterval(function() {


    getItems()
        .then(data => data.json())
        .then(items => {
            itemsList(items.results);
        });


    // }, 3000);




    function getItems() {
        return fetch("https://manager5.streamradio.fr:1280/api/v2/history/?format=json&limit=21");

    }

    function itemsList(items) {
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        let isRightAligned = false;

        items.slice(0, 100).map((item) => {

            let dateTime = new Date(item.ts);
            let hours = dateTime.getHours();
            let minutes = dateTime.getMinutes();
            let time = hours + ":" + minutes;

            let div = document.createElement("div");
            let divText = document.createElement("div");
            let img = document.createElement("img");
            let title = document.createElement("p");
            let date = document.createElement("div");
            let ico = document.createElement("img");
            let author = document.createElement("p");
            let dateText = document.createElement("label");

            dateText.className = "text-date";
            div.className = isRightAligned ? 'item-content item-content-end' : 'item-content';
            divText.className = "text-content";
            img.className = "img";
            ico.className = "ico";
            title.className = isRightAligned ? 'title text-align-end' : 'title';
            date.className = isRightAligned ? 'date  text-align-end' : 'date';
            author.className = isRightAligned ? 'author text-align-end' : 'author';

            dateText.innerHTML = time;
            title.innerHTML = item.title;
            author.innerHTML = item.author;

            img.src = "https://manager5.streamradio.fr:1280/media/tracks/jingleImage12.png";

            if (item.img_url != null || item.img_ur) {
                img.src = item.img_url;
            }

            // ico.src = "./img/timeIco.png";


            date.appendChild(ico);
            date.appendChild(dateText);
            divText.appendChild(date);
            divText.appendChild(title);
            divText.appendChild(author);
            div.appendChild(img);
            div.appendChild(divText);
            table.appendChild(div);

            isRightAligned = !isRightAligned;
        });
    }
});