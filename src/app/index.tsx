import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../styles/appStyles";
import { useLoginViewModel } from "../viewmodel/useLoginViewModel";


export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userId, loading, error, handleLogin } = useLoginViewModel();

  useEffect (() => {
    if (userId) {
      router.replace("/home");
    } else {
      setEmail('');
      setPassword('');
    }
  }, [userId, error])

  if(loading) {
    return <Text style={styles.container}>Loading...</Text>
  }
  

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
        <TextInput style={styles.input} secureTextEntry placeholder="Senha" value={password} onChangeText={setPassword}/>

        <Button title="Entrar" onPress={() => handleLogin(email,password)}/>
        {error && <Text>Erro: {error}</Text>}
      </View>
    </View>
  );
}