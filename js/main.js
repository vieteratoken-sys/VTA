fetch("data/token.json")
    .then(res => res.json())
    .then(data => {
        document.getElementById("totalSupply").innerText =
            data.totalSupply.toLocaleString() + " " + data.symbol;
    });
