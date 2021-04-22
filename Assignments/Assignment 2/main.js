
window.onload = setupPage;

function setupPage() {
    var div = document.querySelector(".info");

    var table = document.createElement('table');
    table.id = 'mainTable';

    var tr = document.createElement('tr');
    
    var th = document.createElement('th');
    th.innerHTML = "Product Image"
    th.id = "image";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerHTML = "Product Description"
    th.id = "description";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerHTML = "Product Price"
    th.id = "price";
    tr.appendChild(th);

    table.appendChild(tr);
    div.appendChild(table);

    for(var i = 0; i < data.length; i++){
        tr = document.createElement('tr');
        
        var td = document.createElement('td');
        var img = document.createElement('img');
        img.setAttribute('src', `./images/${i+1}.jpg`);
        img.setAttribute('width',"100px");
        img.setAttribute('alt','Image not available');
        img.setAttribute('id',"img");
        td.appendChild(img);
        tr.appendChild(td);

        td = document.createElement('td');
        var desc = document.createElement('p');
        desc.innerHTML = `${data[i].description}`;
        desc.setAttribute('id', 'desc');
        td.appendChild(desc);
        tr.appendChild(td);

        td = document.createElement('td');
        desc = document.createElement('p');
        desc.innerHTML = `${data[i].price}`;
        desc.setAttribute('id', 'price');
        td.appendChild(desc);
        tr.appendChild(td);

        table.appendChild(tr);
        div.appendChild(table);
    }
   
}