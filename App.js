import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Editor from "@monaco-editor/react";
import file from "./components/files";

export default function App() {

  const [filename, setFilename] = useState('app.js');
  const files = file[filename];

  return (
    <View>
      <Button
       title="app.js"
       disabled={filename === "app.js"}
       onPress={() => setFilename("app.js")}
      />
      <Button
       title="style.css"
       disabled={filename === "style.css"}
       onPress={() => setFilename("style.css")}
      />
      <Button
       title="index.html"
       disabled={filename === "index.html"}
       onPress={() => setFilename("index.html")}
      />
      <Editor
          height="90vh"
          theme="vs-dark"
          defaultLanguage={file.language}
          path={file.name}
          defaultValue={file.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
