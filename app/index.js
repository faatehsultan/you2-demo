import React, { useState } from "react";
import AgoraUIKit from "agora-rn-uikit";
import { Button, StyleSheet, Text, View } from "react-native";

const APP_ID = "a830d1c3c0ed47efa1341e6ca0437d48";
const CHANNEL_NAME = "temp";
const TOKEN = "007eJxTYHhy1eqfXM/SbsEL01Rsl2dnHDnBIffOeItv9rr/AoxKh4UVGBItjA1SDJONkw1SU0zMU9MSDY1NDFPNkhMNTIzNU0wsnr4sTWsIZGRQ3nqNiZEBAkF8FoaS1NwCBgYAWcsf7g==";

const BroadcasterScreen = () => {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: APP_ID,
    channel: CHANNEL_NAME,
    token: TOKEN,
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={callbacks} />
  ) : (
    <View style={{ padding: 10, marginTop: 40 }}>
      <Text style={{ padding: 10, marginBottom: 40, fontSize: 16 }}>
        Demo broadcasting with synced agora audio (and video) functionality
        implementation
      </Text>
      <Button title="Start Broadcasting" onPress={() => setVideoCall(true)} />
    </View>
  );
};

export default BroadcasterScreen;
