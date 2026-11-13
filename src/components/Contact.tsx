
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

type ContactProps = {
  name: string;
  image: string;
  online: boolean;
};

export default function Contact({
  name,
  image,
  online,
}: ContactProps) {
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
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />

        <View
          style={[
            styles.status,
            {
              backgroundColor: online
                ? "#76D98A"
                : "#F0E86D",
            },
          ]}
        >
          <Text style={styles.statusText}>
            {online ? "✓" : "z"}
          </Text>
        </View>
      </View>

      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 72,
    paddingVertical: 5,
    borderRadius: 15,
  },

  hovered: {
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#DDD",
  },

  status: {
    position: "absolute",
    bottom: 0,
    right: -3,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#6856C8",
    justifyContent: "center",
    alignItems: "center",
  },

  statusText: {
    color: "#333",
    fontSize: 10,
    fontWeight: "bold",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 9,
  },
});