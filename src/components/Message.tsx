
import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

type MessageProps = {
  name: string;
  image: string;
  message: string;
  time: string;
  unread?: number;
  pinned?: boolean;
};

export default function Message({
  name,
  image,
  message,
  time,
  unread = 0,
  pinned = false,
}: MessageProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={[
        styles.container,
        hovered && styles.hovered,
      ]}
    >
      <Image
        source={{ uri: image }}
        style={styles.avatar}
      />

      <View style={styles.details}>
        <View style={styles.topRow}>
          <Text style={styles.name}>
            {name}
          </Text>

          <Text style={styles.time}>
            {time}
          </Text>
        </View>

        <View style={styles.bottomRow}>
          <Text
            numberOfLines={1}
            style={styles.message}
          >
            {message}
          </Text>

          {unread > 0 ? (
            <View style={styles.unread}>
              <Text style={styles.unreadText}>
                {unread}
              </Text>
            </View>
          ) : (
            <Text style={styles.read}>
              ✓✓
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 15,
  },

  hovered: {
    backgroundColor: "#EFEDF8",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#DDD",
  },

  details: {
    flex: 1,
    marginLeft: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#151515",
    flex: 1,
  },

  time: {
    fontSize: 11,
    color: "#777",
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  message: {
    fontSize: 13,
    color: "#555",
    flex: 1,
  },

  unread: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E95C83",
    justifyContent: "center",
    alignItems: "center",
  },

  unreadText: {
    color: "#FFF",
    fontSize: 12,
  },

  read: {
    color: "#6553C2",
    fontSize: 17,
    fontWeight: "bold",
  },
});