import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [fontLoaded] = useFonts({
    'HoltwoodOneSC': require('./assets/fonts/HoltwoodOneSC-Regular.ttf')
  })

  const campos = [
    {
      id: 1,
      titulo: 'Nome do Evento',
      placeholder: 'Ex: Ir as Famácia, Consulta...',
    },
    {
      id: 2,
      titulo: 'Data do Evento',
      placeholder: 'Ex: 21/01/2027...',
    },
    {
      id: 3,
      titulo: 'Horário do Evento',
      placeholder: 'Ex: 12:30...',
    },
    {
      id: 4,
      titulo: 'Horário do Alarme',
      placeholder: 'Ex: 12:00...',
    },
  ]
  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')}
        style={styles.icone} />

      <View style={styles.containerGeral}>
        {
          campos.map(campo => (
            <View style={styles.containerLblTxt}>
              <Text style={styles.label}>{campo.titulo}</Text>

              <TextInput
                placeholderTextColor={"#9A9A9A"}
                placeholder={campo.placeholder}
                style={styles.input} />
            </View>
          ))
        }
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtbtn}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0A9C5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 30,
    paddingTop: '6.9%'
    //412
    //917
  },
  icone: {
    width: 150,
    height: 150,
    borderRadius: 25,
    //top: '6.9%',

  },
  containerGeral: {
    width: '79%',
    height: '39.5%',
    justifyContent: 'space-between',
  },
  containerLblTxt: {
    width: '100%',
    height: '18.9%',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'HoltwoodOneSC',
    color: '#000',
    fontSize: 15,
  },
  input: {
    width: '100%',
    height: '59%',
    backgroundColor: '#fff',
    fontFamily: 'HoltwoodOneSC',
    fontSize: 10,
    color: '#000',
    paddingHorizontal: 7,
    paddingVertical: 12,
    borderRadius: 5,

    //============ SOMBRAS ============
    //Sombra WEB
    boxShadow: '1px 4px 0px 0px rgba(0, 0, 0, 0.5)',
    //Sombra IOS
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    //Sombra Android
    elevation: 4,
  },
  btn:{
    backgroundColor: '#193AA6',
    width: '79%',
    height: '4.4%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  txtbtn:{
    fontFamily: 'HoltwoodOneSC',
    color: '#fff',
    fontSize: 16,
  },
});
