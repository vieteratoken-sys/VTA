async function connectPhantom() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            document.getElementById("walletAddress").innerText =
                "Connected: " + response.publicKey.toString();
        } catch (err) {
            console.log("Connection rejected");
        }
    } else {
        alert("Phantom Wallet not found");
    }
}
