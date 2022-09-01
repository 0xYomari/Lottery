const { developmentChains } = require("../helper-hardhat-config")

const BASE_FEE = "2500000000000000000" // 0.25 is the premium. It cost 0.25 LINK per request
const GAS_PRIC_LINK = 1e9 //calculated value based on the gas price of the chain

module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying Mocks.....")
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: [BASE_FEE, GAS_PRIC_LINK],
        })
        log("Mocks Deployed!")
        log("----------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]
