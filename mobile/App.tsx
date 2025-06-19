import React from "react";
import { WebView } from "react-native-webview";

export default function RootLayout() {
  return (
    <WebView
      source={{ uri: "https://close-relative-generator.vercel.app" }}
      style={{ flex: 1 }}
    />
  );
}
