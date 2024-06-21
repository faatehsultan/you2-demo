import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";
import { RtcEngine, ChannelProfile, ClientRole } from "react-native-agora";

const APP_ID = "YOUR_AGORA_APP_ID";
const CHANNEL_NAME = "test_channel";
const TOKEN = "YOUR_TEMP_TOKEN";

const BroadcasterScreen = () => {
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    const init = async () => {
      const engine = await RtcEngine.create(APP_ID);
      await engine.setChannelProfile(ChannelProfile.LiveBroadcasting);
      await engine.setClientRole(ClientRole.Broadcaster);
      setEngine(engine);
    };

    init();

    return () => {
      if (engine) {
        engine.destroy();
      }
    };
  }, []);

  const startBroadcast = async () => {
    await engine.joinChannel(TOKEN, CHANNEL_NAME, null, 0);
  };

  return (
    <View style={styles.container}>
      <Button title="Start Broadcast" onPress={startBroadcast} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BroadcasterScreen;
