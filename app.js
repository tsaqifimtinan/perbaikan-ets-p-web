function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

var apirequest = new XMLHttpRequest();
apirequest.open('GET', 'https://pokeapi.co/api/v2/pokemon', true);

apirequest.onload = function() {
    if (apirequest.status === 200) {
        var data = JSON.parse(apirequest.responseText);
        console.log(data);

        const content = document.getElementById('pokemon');

        if (content) {
            for (let index = 0; index < data.results.length; index++) {
                const item = data.results[index];

                const card = document.createElement('div');
                card.className = "col-lg-3 col-md-6";
                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${capitalize(item.name)}</h5>
                            <button class="btn btn-primary"><a href="${item.url}">Detail<a/></button>
                        </div>
                    </div>
                `;

                content.appendChild(card);
            }
        } else {
            console.error('ERROR');
        }
    } else {
        console.error('Status:' + apirequest.status);
    }
};

apirequest.send();