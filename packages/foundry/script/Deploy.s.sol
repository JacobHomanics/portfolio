//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/YourContract.sol";
import "../contracts/Person.sol";
import "../contracts/Organizations.sol";
import "./DeployHelpers.s.sol";

contract DeployScript is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);

        new Person("Tony Homanics", 0xc689c800a7121b186208ea3b182fAb2671B337E7);

        Organizations.Config memory config1 = Organizations.Config(
            "ATX DAO",
            "https://atxdao.com",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/atx-dao.png"
        );
        Organizations.Config[] memory configs = new Organizations.Config[](1);
        configs[0] = config1;
        new Organizations(configs, 0xCbEbcc04B4A5fA18089695AB357fD149c7862Cce);

        YourContract yourContract = new YourContract(
            vm.addr(deployerPrivateKey)
        );
        console.logString(
            string.concat(
                "YourContract deployed at: ",
                vm.toString(address(yourContract))
            )
        );

        vm.stopBroadcast();

        /**
         * This function generates the file containing the contracts Abi definitions.
         * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
         * This function should be called last.
         */
        exportDeployments();
    }

    function test() public {}
}
