import { Link } from 'react-router-dom';
import '../css/Home.css'; 
import cnn from './cnn.png';
import fox from './fox.png';
import nbc from './nbc.png';
import news from './news12.png';
import google from './google.png';
const Home = () => {
  return (
    <div className='main'>
      <div className='line'></div>
      <h2>Explore Channels</h2>
      <div className='channel-div'>
        <Link to="https://edition.cnn.com/" className="navbar-link">
        <div className='channels' onClick=''><img src={cnn} alt="CNN" height='100px' width='100px' /></div>
        </Link> 
        <Link to="https://www.foxnews.com/" className="navbar-link">
        <div className='channels' onClick=''><img src={fox} alt="FOX" height='100px' width='100px'/></div>
        </Link>
        <Link to="https://www.nbc.com/" className="navbar-link">
        <div className='channels' onClick=''><img src={nbc} alt="NBC" height='100px' width='100px'/></div>
        </Link>
        <Link to="https://news.google.com/" className="navbar-link">
        <div className='channels' onClick=''><img src={google} alt="Google News" height='100px' width='100px'/></div>
        </Link>
        <Link to="https://www.12news.com/" className="navbar-link">
        <div className='channels' onClick=''><img src={news} alt="12News" height='100px' width='100px'/></div>
        </Link>
      </div>
      <h2>Top Headlines</h2>
      <div className='headline-div'>
        <div className='headlines'>
        <h3>Antony Blinken meets with China’s President Xi as US, China spar over bilateral and global issues</h3>
          <p>U.S. Secretary of State Antony Blinken met with Chinese President Xi Jinping and senior Chinese officials on Friday, emphasizing the importance of "responsibly managing" the differences between the United States and China, as the two sides clashed over a range of contentious bilateral, regional, and global issues, including China's support for Russia and its invasion of Ukraine, Taiwan, the South China Sea, human rights, and the production and export of synthetic opioid precursors. Despite the differences, Blinken highlighted recent progress in bilateral cooperation, such as military communications, counternarcotics, and artificial intelligence, and announced the start of a dialogue on reducing risks from rapidly emerging technology.</p>
          <br />
        </div>
        <div className='headlines'>
          <h3>Humza Yousaf will not resign as Scotland's first minister</h3>
          <p>Humza Yousaf, Scotland's first minister, has announced that he will not resign and will continue to serve in his role, despite facing a no-confidence vote next week. Yousaf, who is fighting for his political future, expressed confidence in winning the vote and hopes that the Scottish Greens will reconsider their decision to vote against him. He also stated that he will lead the SNP into the general election and the 2026 Holyrood election. Yousaf denied claims that he is a "lame duck" first minister after the collapse of the SNP's power-sharing agreement with the Greens. He plans to run a minority government in the Scottish Parliament and will write to opposition party leaders, including the Greens, to ask them to meet with him to "make minority government work". Yousaf acknowledged that minority government is "tough" but hopes to work with other parties "issue by issue" to "deliver for the people of Scotland".</p>
          <br />
        </div>
        <div className='headlines'>
          <h3>Israel could still force an exodus into Egypt</h3>
          <p>As Passover begins in the Holy Land, a grim reality remains: Israel may soon launch a full-scale offensive into Rafah, a southern Gazan city that is home to more than a million Palestinians seeking refuge in their war-torn territory. Prime Minister Benjamin Netanyahu has been signaling his intent to launch an attack on Hamas, the militant group that controls the city, despite skepticism from experts who believe Hamas is far from defeated and concerns from foreign diplomats and aid workers about the potential harm to civilians. A major offensive would trigger the panicked flight of hundreds of thousands of Gazans, many of whom fled to Rafah after their homes and neighborhoods elsewhere in Gaza were destroyed by the Israeli military in its post-October 7 war against Hamas. There has been speculation over whether Egypt would allow tens of thousands of Palestinians to flee to safety in the Sinai desert, but Cairo is hesitant to admit a refugee influx due to its own internal security concerns and broader Pan-Arab worries that the Palestinians will be prevented from returning to their homeland, similar to a previous generation of Palestinian refugees. On Tuesday, Volker Turk, the United Nations' human rights chief, said leaders around the world "stand united on the imperative of protecting the civilian population trapped in Rafah."</p>
          <br />
        </div>
        <div className='headlines'>
          <h3>Ukraine agriculture minister detained in multimillion-dollar corruption inquiry</h3>
          <p>Ukraine's agriculture minister, Mykola Solskyi, has been detained as a formal suspect in a multimillion-dollar corruption inquiry. The case involves the illegal seizure of land worth over '7 million when Solskyi was the head of a major farming company and a member of parliament. An anti-corruption court ordered him to be held in custody until June 24, with bail set at' 1.9 million. Solskyi offered his resignation and promised to cooperate with the investigation. Prosecutors have charged a dozen other people in the case, including civil servants. Solskyi, who owned several farming businesses, was elected to Ukraine's parliament in 2019 and appointed agriculture minister in March 2022. Several corruption cases have emerged in Ukraine since Russia invaded in February 2022, typically involving lower-level officials and army procurement. President Volodymyr Zelenskiy sacked the country's defense minister last year over procurement scandals in the army. Prosecutors also suspended the deputy head of the regional council in the frontline Zaporizhzhia region for one month over a bribery scandal worth at least $16,000.</p>
          <br />
        </div>
      </div>
      <footer className="footer">
        <p>Ready to take your journey towards world of Bombastic New's with us?  </p>
        <Link to="/Blogs" className="learn-link">Click Here!</Link>
      </footer>
    </div>
  )
}

export default Home