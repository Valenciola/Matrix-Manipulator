// Generation
let contents = [[1, 0], [0, 1]];
genMatrix = function() {
    // Generate the matrix using form data
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
    const table = document.getElementById("matrix");
    let contents = [];
    //console.log(rows, columns);

    table.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        let rowcont = [];
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
            rowcont.push(parseFloat(entry.textContent));
        }
        contents.push(rowcont);
        row.id = `r${i + 1}`;
        table.append(row);
    }

    const tdElements = table.querySelectorAll("td");
    tdElements.forEach(td => {
        td.style.width = ((1/columns) * 100 + "%");
    });
    console.log(contents);
}

// Detection (calculate determinant, detect RREF)

// Operations (for scalar, multiplication, addition, the like)