import { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Formulario from "./components/Formulario";
import Pais from "./components/Pais";

export default function App() {
  const [busqueda, guardarBusqueda] = useState({ pais: "" });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const { pais } = busqueda;
    const consultarPais = async () => {
      const url = `https://restcountries.com/v3.1/alpha/${pais}`;
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);
      } catch (error) {
        mostrarAlerta();
      }
    };

    if (consultar) {
      consultarPais();
    }
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert("Error", "No hay resultado. Intente con otra ciudad o país.", [
      { text: "Ok" },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0c29" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.headerEmoji}>🌎</Text>
          <Text style={styles.headerTitle}>Países del Mundo</Text>
          <Text style={styles.headerSubtitle}>
            Consulta información por país
          </Text>
        </View>

        <View style={styles.card}>
          <View style={{ zIndex: 1000 }}>
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </View>
        </View>

        <Pais resultado={resultado} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0f0c29",
  },
  scroll: {
    flex: 1,
    backgroundColor: "#0f0c29",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  headerEmoji: {
    fontSize: 52,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#a0a0c0",
    marginTop: 4,
    letterSpacing: 0.3,
  },
  resultadoPlaceholder: {
    height: 0,
  },
  card: {
    backgroundColor: "#1e1e3a",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 1,
    borderColor: "#2e2e50",
  },
});
