import React,{useContext} from "react";
import { Route, Routes } from "react-router-dom";
import { HealthContext } from "./Context/HealthCareContext";
// import styles from './home.module.css'
// margin-bottom: -34px;
// border: 2px solid white;
// padding: 6px;
import './home.css'

const App = () => {
  const { yourStakinginINR} =useContext(HealthContext);
  console.log(yourStakinginINR);
  return (
    <div className="home-container">
    <div className="home-container01">
      <button className="home-button button">0xfsdfl....erlkm</button>
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
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-container30">
                  <span className="home-text24">2%</span>
                </div>
              </div>
              <div className="home-container31">
                <div className="home-container32">
                  <span className="home-text25">
                    <span>
                      Your Stake: 6.0000
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>≈ $1171.62</span>
                  </span>
                </div>
              </div>
              <div className="home-container33">
                <div className="home-container34">
                  <span className="home-text29">
                    <span>
                      Earned: 1660.4413
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>≈ $298.88</span>
                  </span>
                </div>
              </div>
              <div className="home-container35">
                <div className="home-container36">
                  <span className="home-text33">Total Staked: 7232</span>
                </div>
                <div className="home-container37">
                  <div className="home-container38">
                    <span className="home-text34">Deposit</span>
                  </div>
                  <div className="home-container39">
                    <span className="home-text35">Withdraw</span>
                  </div>
                </div>
                <div className="home-container40">
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
                <div className="home-container55"></div>
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
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-container60">
                  <span className="home-text45">2%</span>
                </div>
              </div>
              <div className="home-container61">
                <div className="home-container62">
                  <span className="home-text46">
                    <span>
                      Your Stake: 6.0000
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>≈ $1171.62</span>
                  </span>
                </div>
              </div>
              <div className="home-container63">
                <div className="home-container64">
                  <span className="home-text50">
                    <span>
                      Earned: 1660.4413
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>≈ $298.88</span>
                  </span>
                </div>
              </div>
              <div className="home-container65">
                <div className="home-container66">
                  <span className="home-text54">Total Staked: 7232</span>
                </div>
                <div className="home-container67">
                  <div className="home-container68">
                    <span className="home-text55">Deposit</span>
                  </div>
                  <div className="home-container69">
                    <span className="home-text56">Withdraw</span>
                  </div>
                </div>
                <div className="home-container70">
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
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-container81">
                  <span className="home-text62">2%</span>
                </div>
              </div>
              <div className="home-container82">
                <div className="home-container83">
                  <span className="home-text63">
                    <span>
                      Your Stake: 6.0000
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>≈ $1171.62</span>
                  </span>
                </div>
              </div>
              <div className="home-container84">
                <div className="home-container85">
                  <span className="home-text67">
                    <span>
                      Earned: 1660.4413
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>≈ $298.88</span>
                  </span>
                </div>
              </div>
              <div className="home-container86">
                <div className="home-container87">
                  <span className="home-text71">Total Staked: 7232</span>
                </div>
                <div className="home-container88">
                  <div className="home-container89">
                    <span className="home-text72">Deposit</span>
                  </div>
                  <div className="home-container90">
                    <span className="home-text73">Withdraw</span>
                  </div>
                </div>
                <div className="home-container91">
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
