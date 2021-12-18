require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stomach dash script coin inside light army genius'; 
let testAccounts = [
"0x306226931f64fbcc9ffed493e3f0fb4991a37ba2ea5468eeb8abd7efc3328f6b",
"0x58d177f0f7937725d300c565f2f1dc9ec849321ff555239e9b1c95113b8c0f04",
"0xa2a1b78e0e17e1325fde4ae8ed3025631a9fda5e90cacb08a71556d9e435b3bd",
"0xad2bb9fbd1a2a0e7c2beccfcd52d598f2119b0cf780ae7e826b6f91a4c754c16",
"0xc2267695ca672c507a4bdd6cd9a37ef42a236b24870ca755bf41134ba11ac586",
"0x40c7fad881ad56d4971047c0cda335f120787df8e188c7284fd4ef74005b14b5",
"0xb77408136d9ad8f7dc48caf9bb8cb14fbd2e75dc1d322406d28513fd3870e60a",
"0x8fb2fc1c2fe508a73b5921e0c179cdecc074c73cf2f40e748f2e57e33207c359",
"0x4146ec1f97090583a394efe9ff61f5c689b6df5fc4a91c578f5211ebb9fed25c",
"0x0149ce2e16c7c925d9d3a95c80ae93b2ae3b2e3e28385b48b00b157e45f5c9de"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

