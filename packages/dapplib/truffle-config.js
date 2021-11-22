require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski street dash sad million guess end army genuine'; 
let testAccounts = [
"0x916187b66091cefc8f0526626e9acd30dce31858c13a2037054bf8cfb27cafd0",
"0x177e5bf1e083b5da2444695b8c394475cae4ca8126873837c95c0707e6e5c16e",
"0x341ca97b6d6c46a96b7501c0e597c0df03a3e144f0ae4a645e78741e670dac49",
"0x1606cafa34f7d742b8e9116538fa351b20abefba830d209fe4cfd979104fd1b9",
"0x4dbe6f976c89f613da8263d8e231b3dd3400e43fc656cf2a5579a506f1c3b290",
"0xe396af97c833ed9c6352ad1d1b26843fb59e3814b8ffc1e7a195b293e1ae42cd",
"0xdb4ee42b36191cdc459a34e595eee6be0d69c67265d14074b4eb34f41398169d",
"0x645b1100159602c5608361a18f36864fcca93bdd2586667d8f76ddfcc2a67f0c",
"0x188998e6265b7edf2e172048677702a9063464a6adcc915be599861282d550f7",
"0xa0e3c6d3f146cf4d0267c39f55b5928e9c7e86988388154cfc3faab7423d12ef"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

