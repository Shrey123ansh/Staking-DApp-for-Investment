import React,{useContext} from "react";
import { Route, Routes } from "react-router-dom";
import { HealthContext } from "./Context/HealthCareContext";
import styles from './home.module.css'
// margin-bottom: -34px;
// border: 2px solid white;
// padding: 6px;

const App = () => {
  const { yourStakinginINR} =useContext(HealthContext);
  console.log(yourStakinginINR);
  return (
    <div>
  <div class="home-container">
    <div class="home-container01">
      <button class="home-button button">0xfsdfl....erlkm</button>
      <div class="home-container02">
        <div class="home-container03">
          <span class="home-text">Bomb Finance Summary</span>
        </div>
        <div class="home-container04">
          <div class="home-container05">
            <div class="home-container06">
              <span class="home-text01">Unity</span>
              <span class="home-text02">Unity</span>
              <span class="home-text03">Unity</span>
            </div>
            <div class="home-container07">
              <div class="home-container08">
                <div class="home-container09">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                    class="home-image"
                  />
                  <span class="home-text04">Unity</span>
                  <span class="home-text05">Unity</span>
                  <span class="home-text06">Unity</span>
                  <span class="home-text07">Unity</span>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                    class="home-image1"
                  />
                </div>
              </div>
            </div>
            <div class="home-container10">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                class="home-image2"
              />
              <span class="home-text08">Unity</span>
              <span class="home-text09">Unity</span>
              <span class="home-text10">Unity</span>
              <span class="home-text11">Unity</span>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                class="home-image3"
              />
            </div>
            <div class="home-container11">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                class="home-image4"
              />
              <span class="home-text12">Unity</span>
              <span class="home-text13">Unity</span>
              <span class="home-text14">Unity</span>
              <span class="home-text15">Unity</span>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGJpdGNvaW58ZW58MHx8fHwxNjgwMDE5NzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                class="home-image5"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="home-container12">
        <div class="home-container13">
          <div class="home-container14">
            <div class="home-container15">
              <span class="home-text16">Read Investment Strategy &gt;</span>
            </div>
          </div>
          <div class="home-container16">
            <span class="home-text17">Invest Now</span>
          </div>
          <div class="home-container17">
            <div class="home-container18">
              <span class="home-text18">Chat on Discord</span>
            </div>
            <div class="home-container19">
              <span class="home-text19">Read Docs</span>
            </div>
          </div>
          <div class="home-container20">
            <div class="home-container21">
              <div class="home-container22">
                <div class="home-container23">
                  <span class="home-text20">Bomb Farms</span>
                  <div class="home-container24">
                    <span class="home-text21">Recommended</span>
                  </div>
                </div>
                <div class="home-container25"></div>
              </div>
              <div class="home-container26">
                <span class="home-text22">
                  Stake BSHARE and earn BOMB every epoch
                </span>
              </div>
            </div>
            <div class="home-container27">
              <div class="home-container28">
                <div class="home-container29">
                  <span class="home-text23">Daily Returns:</span>
                </div>
                <div class="home-container30">
                  <span class="home-text24">2%</span>
                </div>
              </div>
              <div class="home-container31">
                <div class="home-container32">
                  <span class="home-text25">
                    <span>Your Stake: 6.0000</span>
                    <br />
                    <span>≈ $1171.62</span>
                  </span>
                </div>
              </div>
              <div class="home-container33">
                <div class="home-container34">
                  <span class="home-text29">
                    <span>Earned: 1660.4413</span>
                    <br />
                    <span>≈ $298.88</span>
                  </span>
                </div>
              </div>
              <div class="home-container35">
                <div class="home-container36">
                  <span class="home-text33">Total Staked: 7232</span>
                </div>
                <div class="home-container37">
                  <div class="home-container38">
                    <span class="home-text34">Deposit</span>
                  </div>
                  <div class="home-container39">
                    <span class="home-text35">Withdraw</span>
                  </div>
                </div>
                <div class="home-container40">
                  <span class="home-text36">Claim Rewards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-container41">
          <div class="home-container42">
            <span class="home-text37">Latest News :</span>
          </div>
        </div>
      </div>
      <div class="home-container43">
        <div class="home-container44">
          <div class="home-container45">
            <div class="home-container46">
              <span class="home-text38">Bomb Farms</span>
            </div>
            <div class="home-container47">
              <span class="home-text39">
                Stake your LP tokens in our farms to start earning $BSHARE
              </span>
            </div>
          </div>
          <div class="home-container48">
            <span class="home-text40">Claim All</span>
          </div>
        </div>
        <div class="home-container49">
          <div class="home-container50">
            <div class="home-container51">
              <div class="home-container52">
                <div class="home-container53">
                  <span class="home-text41">Bomb Farms</span>
                  <div class="home-container54">
                    <span class="home-text42">Recommended</span>
                  </div>
                </div>
                <div class="home-container55"></div>
              </div>
              <div class="home-container56">
                <span class="home-text43">
                  Stake BSHARE and earn BOMB every epoch
                </span>
              </div>
            </div>
            <div class="home-container57">
              <div class="home-container58">
                <div class="home-container59">
                  <span class="home-text44">Daily Returns:</span>
                </div>
                <div class="home-container60">
                  <span class="home-text45">2%</span>
                </div>
              </div>
              <div class="home-container61">
                <div class="home-container62">
                  <span class="home-text46">
                    <span>Your Stake: 6.0000</span>
                    <br />
                    <span>≈ $1171.62</span>
                  </span>
                </div>
              </div>
              <div class="home-container63">
                <div class="home-container64">
                  <span class="home-text50">
                    <span>Earned: 1660.4413</span>
                    <br />
                    <span>≈ $298.88</span>
                  </span>
                </div>
              </div>
              <div class="home-container65">
                <div class="home-container66">
                  <span class="home-text54">Total Staked: 7232</span>
                </div>
                <div class="home-container67">
                  <div class="home-container68">
                    <span class="home-text55">Deposit</span>
                  </div>
                  <div class="home-container69">
                    <span class="home-text56">Withdraw</span>
                  </div>
                </div>
                <div class="home-container70">
                  <span class="home-text57">Claim Rewards</span>
                </div>
              </div>
            </div>
          </div>
          <div class="home-container71">
            <div class="home-container72">
              <div class="home-container73">
                <div class="home-container74">
                  <span class="home-text58">Bomb Farms</span>
                  <div class="home-container75">
                    <span class="home-text59">Recommended</span>
                  </div>
                </div>
                <div class="home-container76"></div>
              </div>
              <div class="home-container77">
                <span class="home-text60">
                  Stake BSHARE and earn BOMB every epoch
                </span>
              </div>
            </div>
            <div class="home-container78">
              <div class="home-container79">
                <div class="home-container80">
                  <span class="home-text61">Daily Returns:</span>
                </div>
                <div class="home-container81">
                  <span class="home-text62">2%</span>
                </div>
              </div>
              <div class="home-container82">
                <div class="home-container83">
                  <span class="home-text63">
                    <span>Your Stake: 6.0000</span>
                    <br />
                    <span>≈ $1171.62</span>
                  </span>
                </div>
              </div>
              <div class="home-container84">
                <div class="home-container85">
                  <span class="home-text67">
                    <span>Earned: 1660.4413</span>
                    <br />
                    <span>≈ $298.88</span>
                  </span>
                </div>
              </div>
              <div class="home-container86">
                <div class="home-container87">
                  <span class="home-text71">Total Staked: 7232</span>
                </div>
                <div class="home-container88">
                  <div class="home-container89">
                    <span class="home-text72">Deposit</span>
                  </div>
                  <div class="home-container90">
                    <span class="home-text73">Withdraw</span>
                  </div>
                </div>
                <div class="home-container91">
                  <span class="home-text74">Claim Rewards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-container92"></div>
    </div>
    <div class="home-container93"></div>
  </div>
</div>

  );
};

export default App;
