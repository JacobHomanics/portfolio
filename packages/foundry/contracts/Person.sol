//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "forge-std/console.sol";

contract Person {
    error NotAuthorized();

    PersonConfig s_personConfig;

    struct PersonConfig {
        string name;
        address addr;
    }

    constructor(string memory name, address addr) {
        s_personConfig = PersonConfig(name, addr);
    }

    modifier onlyPerson() {
        if (msg.sender != s_personConfig.addr) {
            revert NotAuthorized();
        }
        _;
    }

    function setName(string memory name) external onlyPerson {
        s_personConfig.name = name;
    }

    function setAddress(address addr) external onlyPerson {
        s_personConfig.addr = addr;
    }

    function getData() external view returns (PersonConfig memory) {
        return s_personConfig;
    }
}
