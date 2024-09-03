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

        new Person(
            "Jacob Homanics",
            "DAO oriented, Public Goods Developer, and an Open Source Advocate striving to make the world a better place.",
            0xc689c800a7121b186208ea3b182fAb2671B337E7
        );

        Organizations.Config memory config1 = Organizations.Config(
            "Curios",
            "https://curios.com",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/curios.jpg"
        );
        Organizations.Config memory config2 = Organizations.Config(
            "DAO Coalition",
            "https://daocoalition.org",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/dao-coalition.png"
        );
        Organizations.Config memory config3 = Organizations.Config(
            "Base",
            "https://base.org",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/base-logo-in-blue.png"
        );
        Organizations.Config memory config4 = Organizations.Config(
            "Bigshot Toyworks",
            "https://bigshottoyworks.com",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/bstw.png"
        );
        Organizations.Config memory config5 = Organizations.Config(
            "ATX DAO",
            "https://atxdao.com",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/atx-dao.png"
        );
        Organizations.Config memory config6 = Organizations.Config(
            "Optimism Fractal",
            "https://optimismfractal.com",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/optimism-fractal.jpg"
        );
        Organizations.Config memory config7 = Organizations.Config(
            "Developer DAO",
            "https://developerdao.com",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/dd.png"
        );
        Organizations.Config memory config8 = Organizations.Config(
            "Optimism",
            "https://optimism.io",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/optimism-ethereum-op-logo.png"
        );
        Organizations.Config memory config9 = Organizations.Config(
            "Buidl Guidl",
            "https://buidlguidl.com",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/buidlguidllogo.jpg"
        );
        Organizations.Config memory config10 = Organizations.Config(
            "Solidity Guild",
            "https://solidityguild.com",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/solidity-guild.png"
        );

        Organizations.Config memory config11 = Organizations.Config(
            "Hats Protocol",
            "https://hatsprotocol.xyz",
            "https://jacobhomanics-organizations.s3.us-east-2.amazonaws.com/hats.jpg"
        );

        Organizations.Config[] memory configs = new Organizations.Config[](11);
        configs[0] = config1;
        configs[1] = config2;
        configs[2] = config3;
        configs[3] = config4;
        configs[4] = config5;
        configs[5] = config6;
        configs[6] = config7;
        configs[7] = config8;
        configs[8] = config9;
        configs[9] = config10;
        configs[10] = config11;
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
