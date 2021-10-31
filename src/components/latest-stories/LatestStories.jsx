import React from 'react';
import friends from '../../images/latest-stories/friends.jpeg';
import anymp4 from '../../images/latest-stories/anymp4.jpeg';
import photoshopAi from '../../images/latest-stories/photoshop-ai.jpeg';
import disappearingMsg from '../../images/latest-stories/disappearing-msg.jpeg';
import faceRecognition from '../../images/latest-stories/face-recognition.jpeg';
import faceId from '../../images/latest-stories/face-id.jpeg';
import flatEarthers from '../../images/latest-stories/flat-earthers.jpeg';
import macApp from '../../images/latest-stories/mac-app.jpeg';


const LatestStories = () => (
  <section className="latest-stories">
    <h2>latest stories</h2>

    <div className="latest-stories_card-container">
      <div className="latest-stories_card">
        <img src={friends} alt='' />
        <h4>How to use Python to figure out why your friends have more friends than you</h4>
        <p>1 hour ago</p>
      </div>

      <div className="latest-stories_card">
        <img src={anymp4} alt='' />
        <h4>Turn any video or audio on your Mac into a saveable file with this AnyMP4 Recorder bundle</h4>
        <p>19 hours ago</p>
      </div>

      <div className="latest-stories_card">
        <img src={photoshopAi} alt='' />
        <h4>How AI is driving powerful new Photoshop features - and shaping Adobe's product strategy</h4>
        <p>22 hours ago</p>
      </div>

      <div className="latest-stories_card">
        <img src={disappearingMsg} alt='' />
        <h4>How to send disappearing messages in every damn chat app</h4>
        <p>23 hours ago</p>
      </div>

      <div className="latest-stories_card">
        <img src={faceRecognition} alt='' />
        <h4>Face recognition in schools normalizes surveillance - and threatens kid's privacy</h4>
        <p>1 day ago</p>
      </div>

      <div className="latest-stories_card">
        <img src={faceId} alt='' />
        <h4>Apple's explanation for no Face ID on the MacBook Pro is nonsense</h4>
        <p>1 day ago</p>
      </div>

      <div className="latest-stories_card">
        <img src={flatEarthers} alt='' />
        <h4>Why flat-Earthers are a clear and present threat to an AI-powered society</h4>
        <p>1 day ago</p>
      </div>

      <div className="latest-stories_card">
        <img src={macApp} alt='' />
        <h4>This top-rated Mac app is how you can finally get that crazy workflow under control</h4>
        <p>2 days ago</p>
      </div>
    </div>

    <button type="button">ALL NEWS</button>
  </section>
);

export default LatestStories;
