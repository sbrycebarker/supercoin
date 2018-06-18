// angular.module('app').controller('supercoin', function($scope) {

module.exports = {
  mine: (req, res , next)=> {
    console.log("SUPECOIN!!!")
    const SHA256 = require('crypto-js/sha256')
    class Block {
      constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
      }
      calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
      }
      // <<--------------------------PROOF OF WORK------------------------------------------>>
      mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
          this.nonce++;
          this.hash = this.calculateHash()
        }
        console.log("Block mined: " + this.hash)
      }
      // <<--------------------------PROOF OF WORK------------------------------------------>>
    }
      class Blockchain {
        constructor() {
          this.chain = [this.createGenesisBlock()];
          this.difficulty = 4;
        }
        createGenesisBlock() {
          let date = new Date()
          return new Block(0 , date , "Genesis block")
        }
        getLatestBlock() {
          return this.chain[this.chain.length - 1];
        }
        addBlock(newBlock) {
            let newDate = new Date()
            newBlock.previousHash = this.getLatestBlock().hash
            newBlock.mineBlock(this.difficulty)
            this.chain.push(newBlock)
        }
      }
        let supercoin = new Blockchain();
        console.log("Mining block 1");
        date = Date()
        supercoin.addBlock(new Block(1, date , { amount: 6} ));
        console.log("Mining block 2");
        date = Date()
        supercoin.addBlock(new Block(2, date , { amount: 9} ));
      console.log("supercoin", JSON.stringify(supercoin, null, 5))
      res.json(supercoin, null, 4)
  }
}
// })
