//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "forge-std/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract PersonConfig {
    string s_name;
    string s_description;

    constructor(string memory name, string memory description) {
        s_name = name;
        s_description = description;
    }

    function getData() external view returns (string memory, string memory) {
        return (s_name, s_description);
    }
}
