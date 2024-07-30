import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";

const GRADIENT_COLORS_LIST = [
  ["#FF9A9E", "#FAD0C4", "#FFC3A0", "#FFAFBD", "#FF9A9E"],
  ["#48c6ef", "#6f86d6", "#48c6ef", "#6f86d6", "#48c6ef"],
  ["#76b852", "#8DC26F", "#a8e063", "#76b852", "#8DC26F"],
  ["#E3E3E3", "#C7C7C7", "#BDBDBD", "#C7C7C7", "#E3E3E3"],
  ["#3a1c71", "#d76d77", "#ffaf7b", "#d76d77", "#3a1c71"],
  ["#FDC830", "#F37335", "#FDC830", "#F37335", "#FDC830"],
  ["#8E2DE2", "#4A00E0", "#8E2DE2", "#4A00E0", "#8E2DE2"],
  ["#ffecd2", "#fcb69f", "#ffecd2", "#fcb69f", "#ffecd2"],
  ["#4776E6", "#8E54E9", "#4776E6", "#8E54E9", "#4776E6"],
  ["#DAD299", "#B0DAB9", "#DAD299", "#B0DAB9", "#DAD299"],
];

const MOVEMENT = 0.0005; // Small value for smooth animation
const FADE_IN_DURATION = 700;

function interpolateColor(
  color1: string,
  color2: string,
  factor: number
): string {
  const r1 = parseInt(color1.substr(1, 2), 16);
  const g1 = parseInt(color1.substr(3, 2), 16);
  const b1 = parseInt(color1.substr(5, 2), 16);

  const r2 = parseInt(color2.substr(1, 2), 16);
  const g2 = parseInt(color2.substr(3, 2), 16);
  const b2 = parseInt(color2.substr(5, 2), 16);

  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export default function AnimatedGradient({ mode }: { mode: number }) {
  const [gradientColors, setGradientColors] = React.useState(
    GRADIENT_COLORS_LIST[mode]
  );
  const GRADIENT_COLORS = GRADIENT_COLORS_LIST[mode];
  const offsetRef = useRef(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animateGradient = useRef(() => {
    offsetRef.current = (offsetRef.current + MOVEMENT) % 1;
    const newColors = [];

    for (let i = 0; i < GRADIENT_COLORS.length; i++) {
      const colorIndex =
        (i + Math.floor(offsetRef.current * GRADIENT_COLORS.length)) %
        GRADIENT_COLORS.length;
      const nextColorIndex = (colorIndex + 1) % GRADIENT_COLORS.length;
      const factor = (offsetRef.current * GRADIENT_COLORS.length) % 1;
      newColors.push(
        interpolateColor(
          GRADIENT_COLORS[colorIndex],
          GRADIENT_COLORS[nextColorIndex],
          factor
        )
      );
    }

    setGradientColors(newColors);
  });

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: FADE_IN_DURATION,
      useNativeDriver: true,
    }).start();

    // Start the infinite color animation
    const animate = () => {
      animateGradient.current();
      requestAnimationFrame(animate);
    };
    animate();

    // No need for cleanup as the animation should run for the lifetime of the component
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
        <LinearGradient
          style={styles.gradient}
          colors={gradientColors}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        ></LinearGradient>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    shadowColor: "#000",
    borderRadius: 20,
    backgroundColor: "white",
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
