import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import { View,Text } from 'react-native';

import Comment from './Comment';

const VideoCall = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "bb229c50c2914fde956a52f6aff0ff55",
    channel: 'Test',
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  ) : <Comment/>
};

export default VideoCall;