import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { GenesisAddress, Genesisabi } from "./constants";
import Web3Modal from "web3modal";

export const HealthContext = React.createContext();

export const HealthCareProvider = ({ children }) => {
  const [connectAccount, setAccount] = useState("");
  const [totalStake, settotalStaked] = useState(null);
  const [yourStaking, setyourStaking] = useState("");
  const [yourStakinginINR, setyourStakinginINR] = useState("");

  const [yourClaim, setyourClaime] = useState("");
  const [yourClaiminINR, setyourClaiminINR] = useState("");
  const [getAPY, setgetAPY] = useState("");
  const [totalStaker, settotalStaker] = useState("");

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const firstAccount = accounts[0];
      // console.log(firstAccount);
      setAccount(firstAccount?.toLowerCase());

      return firstAccount;
    } catch (error) {
      console.log(error);
    }
  };

  const isWallectConnected = async () => {
    try {
      if (!window.ethereum) return alert("Please install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      setAccount(accounts[0]?.toLowerCase());

      window.ethereum.on("chainChanged", (chainId) => {
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", async () => {
        setAccount(accounts[0]?.toLowerCase());
        await isWallectConnected();
      });

      if (accounts.length) {
        setAccount(accounts[0]?.toLowerCase());
      } else {
        alert("Please connect wallet.");
        // console.log("No accounts found.");
      }
    } catch (error) {
      reportError(error);
    }
  };

  const getEtheriumContract = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      console.log(contract);
      return contract;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchContract = (signerOrProvider) =>
    new ethers.Contract(GenesisAddress, Genesisabi, signerOrProvider);

  const fetchData = async () => {

    try {
      if (!window.ethereum) return alert("Please install Metamask");

      const contract = await getEtheriumContract();
      const TotalStaked = await contract.TotalStake();
      // console.log(ethers.utils.formatEther(TotalStaked));
      const totalStaker = ethers.utils.formatEther(TotalStaked);
      settotalStaked(totalStaker);
      console.log(totalStake);

      const YourStaking = await contract.YourStaking();
      // console.log(ethers.utils.formatEther(YourStaking));
      const yourStakings = ethers.utils.formatEther(YourStaking);
      setyourStaking(yourStakings);

      const YourStakinginINR = await contract.YourStakinginINR();
      // console.log(ethers.utils.formatEther(YourStakinginINR));
      const yourStakinginINRs = ethers.utils.formatEther(YourStakinginINR);
      setyourStakinginINR(yourStakinginINRs);

      const YourClaim = await contract.YourClaim();
      // console.log(ethers.utils.formatEther(YourClaim));
      const yourClaims = ethers.utils.formatEther(YourClaim);
      setyourClaime(yourClaims);

      const YourClaiminINR = await contract.YourClaiminINR();
      // console.log(ethers.utils.formatEther(YourClaiminINR));
      const yourClaiminINRs = ethers.utils.formatEther(YourClaiminINR);
      // console.log(yourClaiminINR)
      setyourClaiminINR(yourClaiminINRs);

      const GetAPY = await contract.getAPY();
      console.log(GetAPY.toNumber());
      const getAPYs = GetAPY.toNumber();
      setgetAPY(getAPYs);

      const TotalStaker = await contract.TotalStaker();
      const totalStakerr = TotalStaker.toNumber();
      console.log(totalStakerr);
      settotalStaker(totalStakerr);
    } catch (error) {
      reportError(error);
    }
  };

  const getUnstake = async () => {
    try {
      if (!window.ethereum) return alert("Please install Metamask");
      const contract = await getEtheriumContract();
      const unstake = await contract.Unstake();
    } catch (error) {
      reportError(error);
    }
  };

  const getClaimed = async () => {
    try {
      if (!window.ethereum) return alert("Please install Metamask");
      const contract = await getEtheriumContract();
      const claim = await contract.ClaimReward();
    } catch (error) {
      reportError(error);
    }
  };

  const getDistributeRewards = async () => {
    try {
      if (!window.ethereum) return alert("Please install Metamask");
      const contract = await getEtheriumContract();
      const reward = await contract.DistributeRewards();
    } catch (error) {
      reportError(error);
    }
  };

  const getStake = async (amount) => {
    try {
      if (!window.ethereum) return alert("Please install Metamask");
      const contract = await getEtheriumContract();
      amount = ethers.utils.parseEther(amount);
      let stake = await contract.Staking(amount);

      // setGlobalState('backers', structuredBackers(backers))
    } catch (error) {
      reportError(error);
    }
  };

  const getchangeAPY = async (value) => {
    try {
      if (!window.ethereum) return alert("Please install Metamask");
      const contract = await getEtheriumContract();
      let changeAPY = await contract.changeAPY(value);

      // setGlobalState('backers', structuredBackers(backers))
    } catch (error) {
      reportError(error);
    }
  };

  // useEffect(() => {
  //   connectWallet();
  //   getEtheriumContract();
  //   fetchData();
  //   console.log(yourStakinginINR)

  // }, []);

  return (
    
    <HealthContext.Provider
      value={{
        connectAccount,
        totalStake,
        yourStaking,
        yourStakinginINR,
        yourClaim,
        yourClaiminINR,
        getAPY,
        totalStaker,
        getchangeAPY,
        getStake,
        getDistributeRewards,
        getUnstake,
        getClaimed,
        connectWallet,
        getEtheriumContract,
        isWallectConnected,
        fetchData
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};
