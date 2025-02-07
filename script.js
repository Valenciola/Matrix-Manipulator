genMatrix = function() {
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
    const table = document.getElementById("matrix");
    //console.log(rows, columns);

    table.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            entry = document.createElement("td");
            row.appendChild(entry);
            entry.id = `c${i + 1}${j + 1}`
            if (i === j) {
                entry.innerHTML = "1";
            }
            else {
                entry.innerHTML = "0"
            }
        }
        table.append(row);
    }

    const tdElements = table.querySelectorAll("td");
    tdElements.forEach(td => {
        td.style.width = ((1/columns) * 100 + "%");
    });
}