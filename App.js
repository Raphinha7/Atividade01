import React, { Component } from "react";
import { View, Text, Image, Platform} from 'react-native';


class App extends Component {
  render() {
    return(
      <View style={{marginTop:50}}>
        <Text style={{color: '#8A2BE2', fontSize: 30, margin: 20}}>
          NextLevel Games </Text>
          <Text
      style={{
    fontFamily: Platform.select
    ({
      android: 'Inter_900Black',
      ios: 'Inter-Black',
    }),
  }}>
  Versão 1.0
 
</Text>

        <Image
        source={{uri: 'https://cdn.awsli.com.br/600x700/2083/2083959/produto/296891990/86dc552e-7221-4ec5-a78d-5591f7837ab7-xjz59i8sb4.jpg'}}
        style={{width: 200, height: 150}}
        />
<Text>EAFC25 
</Text>Data de lançamento:27 de Setembro de 2024
<Text>Desenvolvedora:Eletronic Arts "EA"
</Text>
<Jobs largura={300} altura={300}/>
</View>
    );
  }
}

export default App;


class Jobs extends Component {
  render() {
      let img = 'https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png';

      return(
        <View style={{justifyContent:"center", alignItems:"center"}}>
          <Image
          source={{uri: img}}
          style={{width:200 , height:150 }}
          
          />
      <Text>Red Dead Redemption 2
      </Text>Data de lançamento:26 de Outubro de 2018
      <Text/>Desenvolvedora:RockstarNorth        
      

      </View>
      
      );
  }
}
