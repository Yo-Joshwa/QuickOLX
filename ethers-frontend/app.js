document.getElementById('connectButton').addEventListener('click', connectWallet);
document.getElementById('interactButton').addEventListener('click', interactWithContract);

let provider;
let signer;

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            document.getElementById('result').innerText = 'Wallet connected!';
        } catch (error) {
            console.error(error);
            document.getElementById('result').innerText = 'Error connecting wallet!';
        }
    } else {
        document.getElementById('result').innerText = 'Please install MetaMask!';
    }
}

async function interactWithContract() {
    const contractAddress = document.getElementById('contractAddress').value;
    const contractABI = JSON.parse(document.getElementById('contractABI').value);

    if (!contractAddress || !contractABI) {
        document.getElementById('result').innerText = 'Please provide contract address and ABI!';
        return;
    }

    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    
    try {
        // Example: calling a read-only function called `getValue`
        const value = await contract.getValue();
        document.getElementById('result').innerText = `Contract value: ${value}`;
        
        // Example: sending a transaction to a function called `setValue`
        const tx = await contract.setValue(42);
        await tx.wait();
        document.getElementById('result').innerText = 'Transaction successful!';
    } catch (error) {
        console.error(error);
        document.getElementById('result').innerText = 'Error interacting with contract!';
    }
}
