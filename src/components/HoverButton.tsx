
import React, { useState } from "react";

import {
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";

type HoverButtonProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  hoverStyle?: StyleProp<ViewStyle>;
};

export default function HoverButton({
  children,
  style,
  hoverStyle,
}: HoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[
        styles.button,
        style,
        isHovered && hoverStyle,
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});