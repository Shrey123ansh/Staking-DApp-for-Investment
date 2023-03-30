import React, { useContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { HealthContext } from "./Context/HealthCareContext";
import { HealthContext } from "./Context/HealthCareContext";
import "./home.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = useState("");

  const {
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
    fetchData,
  } = useContext(HealthContext);

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!amount) return

    await getStake(amount);
  }

  const truncate = (text, startChars, endChars, maxLength) => {
    if (text.length > maxLength) {
      let start = text.substring(0, startChars);
      let end = text.substring(text.length - endChars, text.length);
      while (start.length + end.length < maxLength) {
        start = start + ".";
      }
      return start + end;
    }
    return text;
  };

  useEffect(async () => {
    //  connectWallet();
    await getEtheriumContract();
    // console.log(totalStake);
    await fetchData();
    isWallectConnected();
    console.log("Blockchain loaded");
    setLoaded(true);
  }, []);

  return (
    <div className="home-container">
      <div className="home-container01">
        {connectAccount ? (
          <button type="button" className="home-button button">
            {truncate(connectAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="home-button button"
            onClick={connectAccount}
          >
            Connect Wallet
          </button>
        )}

        <div className="home-container02">
          <div className="home-container03">
            <span className="home-text">Bomb Finance Summary</span>
          </div>
          <div className="home-container04">
            <div className="home-container05">
              <div className="home-container06">
                <span className="home-text01">Unity</span>
                <span className="home-text02">Unity</span>
                <span className="home-text03">Unity</span>
              </div>
              <div className="home-container07">
                <div className="home-container08">
                  <div className="home-container09">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="home-image"
                    />
                    <span className="home-text04">Unity</span>
                    <span className="home-text05">Unity</span>
                    <span className="home-text06">Unity</span>
                    <span className="home-text07">Unity</span>
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="home-image1"
                    />
                  </div>
                </div>
              </div>
              <div className="home-container10">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image2"
                />
                <span className="home-text08">Unity</span>
                <span className="home-text09">Unity</span>
                <span className="home-text10">Unity</span>
                <span className="home-text11">Unity</span>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image3"
                />
              </div>
              <div className="home-container11">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image4"
                />
                <span className="home-text12">Unity</span>
                <span className="home-text13">Unity</span>
                <span className="home-text14">Unity</span>
                <span className="home-text15">Unity</span>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <div className="home-container15">
                <span className="home-text16">
                  Read Investment Strategy &gt;
                </span>
              </div>
            </div>
            <div className="home-container16">
              <span className="home-text17">Invest Now</span>
            </div>
            <div className="home-container17">
              <div className="home-container18">
                <span className="home-text18">Chat on Discord</span>
              </div>
              <div className="home-container19">
                <span className="home-text19">Read Docs</span>
              </div>
            </div>
            <div className="home-container20">
              <div className="home-container21">
                <div className="home-container22">
                  <div className="home-container23">
                    <span className="home-text20">Bomb Farms</span>
                    <div className="home-container24">
                      <span className="home-text21">Recommended</span>
                    </div>
                  </div>
                  <div className="home-container25"></div>
                </div>
                <div className="home-container26">
                  <span className="home-text22">
                    Stake BSHARE and earn BOMB every epoch
                  </span>
                </div>
              </div>
              <div className="home-container27">
                <div className="home-container28">
                  <div className="home-container29">
                    <span className="home-text23">
                      Daily Returns:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-container30">
                    <span className="home-text24">{getAPY}%</span>
                  </div>
                </div>
                <div className="home-container31">
                  <div className="home-container32">
                    <span className="home-text25">
                      <span>
                        Your Stake: {yourStaking}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>{yourStakinginINR} INR</span>
                    </span>
                  </div>
                </div>
                <div className="home-container33">
                  <div className="home-container34">
                    <span className="home-text29">
                      <span>
                        Earned: {yourClaim}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>≈ {yourClaiminINR}</span>
                    </span>
                  </div>
                </div>
                <div className="home-container35">
                  <div className="home-container36">
                    <span className="home-text33">
                      Total Staked: {totalStake}
                    </span>
                  </div>
                  <div className="home-container37">
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Stake Your Funds
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          <form onSubmit={handleSubmit}>
                            <label>
                              Enter Your Staking Amount:
                              <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                              />
                            </label>
                            <input type="submit" />
                          </form>
                        </Typography>
                      </Box>
                    </Modal>
                    <div
                      className="home-container38"
                      onClick={() => handleOpen()}
                    >
                      <span className="home-text34">Deposit</span>
                    </div>
                    <div
                      className="home-container39"
                      onClick={() => getUnstake()}
                    >
                      <span className="home-text35">Withdraw</span>
                    </div>
                  </div>
                  <div
                    className="home-container40"
                    onClick={() => getClaimed()}
                  >
                    <span className="home-text36">Claim Rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container41">
            <div className="home-container42">
              <span className="home-text37">Latest News :</span>
            </div>
          </div>
        </div>
        <div className="home-container43">
          <div className="home-container44">
            <div className="home-container45">
              <div className="home-container46">
                <span className="home-text38">Bomb Farms</span>
              </div>
              <div className="home-container47">
                <span className="home-text39">
                  Stake your LP tokens in our farms to start earning $BSHARE
                </span>
              </div>
            </div>
            <div className="home-container48">
              <span className="home-text40">Claim All</span>
            </div>
          </div>
          <div className="home-container49">
            <div className="home-container50">
              <div className="home-container51">
                <div className="home-container52">
                  <div className="home-container53">
                    <span className="home-text41">Bomb Farms</span>
                    <div className="home-container54">
                      <span className="home-text42">Recommended</span>
                    </div>
                  </div>
                  {/* <div className="home-container55"></div> */}
                </div>
                <div className="home-container56">
                  <span className="home-text43">
                    Stake BSHARE and earn BOMB every epoch
                  </span>
                </div>
              </div>
              <div className="home-container57">
                <div className="home-container58">
                  <div className="home-container59">
                    <span className="home-text44">
                      Daily Returns:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-container60">
                    <span className="home-text45">{getAPY}%</span>
                  </div>
                </div>
                <div className="home-container61">
                  <div className="home-container62">
                    <span className="home-text46">
                      <span>
                        Your Stake: {yourStaking}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>≈ {yourStakinginINR} INR</span>
                    </span>
                  </div>
                </div>
                <div className="home-container63">
                  <div className="home-container64">
                    <span className="home-text50">
                      <span>
                        Earned: {yourClaim}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>≈ {yourClaiminINR} INR</span>
                    </span>
                  </div>
                </div>
                <div className="home-container65">
                  <div className="home-container66">
                    <span className="home-text54">
                      Total Staked: {totalStake}
                    </span>
                  </div>
                  <div className="home-container67">
                  <div
                      className="home-container38"
                      onClick={() => handleOpen()}
                    >
                      <span className="home-text34">Deposit</span>
                    </div>
                    <div
                      className="home-container69"
                      onClick={() => getUnstake()}
                    >
                      <span className="home-text56">Withdraw</span>
                    </div>
                  </div>
                  <div
                    className="home-container70"
                    onClick={() => getClaimed()}
                  >
                    <span className="home-text57">Claim Rewards</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container71">
              <div className="home-container72">
                <div className="home-container73">
                  <div className="home-container74">
                    <span className="home-text58">Bomb Farms</span>
                    <div className="home-container75">
                      <span className="home-text59">Recommended</span>
                    </div>
                  </div>
                  <div className="home-container76"></div>
                </div>
                <div className="home-container77">
                  <span className="home-text60">
                    Stake BSHARE and earn BOMB every epoch
                  </span>
                </div>
              </div>
              <div className="home-container78">
                <div className="home-container79">
                  <div className="home-container80">
                    <span className="home-text61">
                      Daily Returns:
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-container81">
                    <span className="home-text62">{getAPY}%</span>
                  </div>
                </div>
                <div className="home-container82">
                  <div className="home-container83">
                    <span className="home-text63">
                      <span>
                        Your Stake: {yourStaking}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>≈ {yourStakinginINR} INR</span>
                    </span>
                  </div>
                </div>
                <div className="home-container84">
                  <div className="home-container85">
                    <span className="home-text67">
                      <span>
                        Earned: {yourClaim}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </span>
                      <br></br>
                      <span>≈ {yourClaiminINR} INR</span>
                    </span>
                  </div>
                </div>
                <div className="home-container86">
                  <div className="home-container87">
                    <span className="home-text71">
                      Total Staked: {totalStake}
                    </span>
                  </div>
                  <div className="home-container88">
                  <div
                      className="home-container38"
                      onClick={() => handleOpen()}
                    >
                      <span className="home-text34">Deposit</span>
                    </div>
                    <div
                      className="home-container90"
                      onClick={() => getUnstake()}
                    >
                      <span className="home-text73">Withdraw</span>
                    </div>
                  </div>
                  <div
                    className="home-container91"
                    onClick={() => getClaimed()}
                  >
                    <span className="home-text74">Claim Rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container92"></div>
      </div>
      <div className="home-container93"></div>
    </div>
  );
};

export default App;

<div className="home-container02">
  <div className="home-container03">
    <span className="home-text">Bomb Finance Summary</span>
  </div>
  <div className="home-container04">
    <div className="home-container05">
      <div className="home-container06">
        <span className="home-text01">Unity</span>
        <span className="home-text02">Unity</span>
        <span className="home-text03">Unity</span>
      </div>
      <div className="home-container07">
        <div className="home-container08">
          <div className="home-container09">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
              className="home-image"
            />
            <span className="home-text04">Unity</span>
            <span className="home-text05">Unity</span>
            <span className="home-text06">Unity</span>
            <span className="home-text07">Unity</span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
              className="home-image1"
            />
          </div>
        </div>
      </div>
      <div className="home-container10">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
          className="home-image2"
        />
        <span className="home-text08">Unity</span>
        <span className="home-text09">Unity</span>
        <span className="home-text10">Unity</span>
        <span className="home-text11">Unity</span>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
          className="home-image3"
        />
      </div>
      <div className="home-container11">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
          className="home-image4"
        />
        <span className="home-text12">Unity</span>
        <span className="home-text13">Unity</span>
        <span className="home-text14">Unity</span>
        <span className="home-text15">Unity</span>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
          className="home-image5"
        />
      </div>
    </div>
  </div>
</div>;
