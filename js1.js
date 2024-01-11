// web3

// CONNECT WALLET

var walletConnect = document.getElementById("walletConnect");
var Connected;
var AddressesConnected;

walletConnect.addEventListener("click", async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const Accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("MTMSK Connected");
      AddressesConnected = Accounts[0];
      console.log(AddressesConnected);
      document.getElementById("walletConnect").innerText = "Connected";
      Connected = true;
      iniInterval1(); 
      console.log("Intervalo comienza")

    } catch (error) {
      console.log("ERROR al Conectar MTMSK");
    }
  } else {
    console.log("MTMSK Not Detected");
  }
});

// CONTRACT1

const cAddress1 = "0x30fF187eEdbAEE9899abbA5E5277bEdF41063C68";
const ABI1 = [
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "amount",
				"type": "uint16"
			}
		],
		"name": "buyPoints",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimPointsToUserG1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "upgradeG1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "upLev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastClaim1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lev",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "p1",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "seeIfCanPlayG1",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "t",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "xp",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const web3Instance1 = new Web3(window.ethereum);

const c1 = new web3Instance1.eth.Contract(
  ABI1,
  cAddress1
);

var g1b = document.getElementById("g1b");

g1b.addEventListener("click", async() => {
    try {
        await c1.methods.claimPointsToUserG1().send({from: AddressesConnected});
        firstTime = true;
    } catch(error) {
        console.error("error" + error);
    }
})


//__________________________________________________________________________________________________________
//__________________________________________________________________________________________________________
// Game1
//__________________________________________________________________________________________________________
//__________________________________________________________________________________________________________

var x = 0;
var click1 = false;

function disableBut1(){
    g1b.disabled = true;
}

disableBut1();
var time1 = 0; 
var firstTime = true;
var inter1;

document.addEventListener("keydown", function(event){
    if(event.key === "ñ" && click1 == false && x < 24){
        if(firstTime == true){
            inter1 = setInterval(counter1, 10);
            inter1;
            firstTime = false;
        }
        click1 = true;
        x++;
        console.log(x);
        document.getElementById("bar").style.width = x*2+"vw";
        document.getElementById("pBar").innerText = x;
    } else if (x == 24) {
        x++;
        document.getElementById("bar").style.width = x*2+"vw";
        document.getElementById("pBar").innerText = x;
        g1b.disabled = false;
        clearInterval(inter1);
        time1 = parseFloat(time1.toFixed(3));
        console.log("time1 " + time1 );
    }
})

document.addEventListener("keyup", function(event){
    if(event.key === "ñ" && click1 == true){
        click1 = false;
    }

})

function counter1() {
    time1 = time1 + 0.01;
    time1 = parseFloat(time1.toFixed(3));
    document.getElementById("timer1").innerText = "Crono: " +time1 + "s";
}
