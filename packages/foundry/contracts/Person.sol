//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "forge-std/console.sol";

contract Person {
    error NotAuthorized();

    PersonConfig s_personConfig;

    struct PersonConfig {
        string name;
        string description;
        address addr;
    }

    constructor(string memory name, string memory description, address addr) {
        s_personConfig = PersonConfig(name, description, addr);
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

    function setDescription(string memory description) external onlyPerson {
        s_personConfig.description = description;
    }

    function setAddress(address addr) external onlyPerson {
        s_personConfig.addr = addr;
    }

    function getData() external view returns (PersonConfig memory) {
        return s_personConfig;
    }
}
