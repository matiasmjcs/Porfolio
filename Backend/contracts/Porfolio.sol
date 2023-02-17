// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Porfolio {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    struct mesaje {
        uint256 id;
        address from;
        string mesaje;
    }

    uint256 public numero = 22;

    uint256 counter = 0;

    event newMesaje(address from, string mesaje);

    mapping(uint256 => mesaje) public viewMesaje;

    function sendMesaje(string memory _mesaje) public {
        viewMesaje[counter] = mesaje(counter, msg.sender, _mesaje);
        emit newMesaje(msg.sender, _mesaje);
        counter++;
    }
}
