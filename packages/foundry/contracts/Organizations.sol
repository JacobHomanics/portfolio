//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "forge-std/console.sol";

contract Organizations {
    error NotAuthorized();

    struct Config {
        string name;
        string url;
        string icon;
    }

    uint256 orgCount;

    mapping(uint256 orgId => Config) s_orgConfigs;
    address s_authorizedUser;

    constructor(Config[] memory configs, address authorizedUser) {
        for (uint256 i = 0; i < configs.length; i++) {
            s_orgConfigs[i] = configs[i];
        }
        orgCount = configs.length;

        s_authorizedUser = authorizedUser;
    }

    modifier onlyAuthorized() {
        if (msg.sender != s_authorizedUser) {
            revert NotAuthorized();
        }
        _;
    }

    function addConfig(Config memory config) external onlyAuthorized {
        s_orgConfigs[orgCount] = config;
        orgCount++;
    }

    function getOrgCount() external view returns (uint256) {
        return orgCount;
    }

    function getData(uint256 orgId) external view returns (Config memory) {
        return s_orgConfigs[orgId];
    }
}
