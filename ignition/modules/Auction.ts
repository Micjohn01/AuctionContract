import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MicjohnModule = buildModule("MicjohnModule", (m) => {

    const auction = m.contract("Auction");

    return { auction };
});

export default MicjohnModule;