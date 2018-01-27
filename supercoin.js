// angular.module('app').controller('supercoin', function($scope) {

  const SHA256 = require('crypto-js/sha256')

  class Block {
    constructor(index, timestamp, data, previousHash = '') {
      this.index = index;
      this.timestamp = timestamp;
      this.data = data;
      this.previousHash = previousHash;
      this.hash = this.calculateHash();
    }

    calculateHash() {
      return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
  }

    class Blockchain {
      constructor() {
        this.chain = [this.createGenesisBlock()];
      }

      createGenesisBlock() {
        return new Block(0 , "01/1/2018", "Genesis block")
      }

      getLatestBlock() {
        return this.chain[this.chain.length - 1];
      }

      addBlock(newBlock) {
          newBlock.previousHash = this.getLatestBlock().hash
          newBlock.hash = newBlock.calculateHash()
          this.chain.push(newBlock)
      }
    }

      let supercoin = new Blockchain()

      supercoin.addBlock(new Block(1, "01/23/2018", { amount: 4} ))
      supercoin.addBlock(new Block(2, "01/26/2018", { amount: 7} ))


    console.log(JSON.stringify(supercoin, null, 4))







// })
