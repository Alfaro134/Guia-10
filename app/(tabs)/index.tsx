import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Formulario from "../../components/Formulario";
import Pais from "../../components/Pais";

export default function HomeScreen() {
  const [busqueda, guardarBusqueda] = useState({
    pais: "",
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  const { pais } = busqueda;

  useEffect(() => {
    const consultarPais = async () => {
      if (consultar) {
        guardarCargando(true);

        try {
          console.log("Consultando país:", pais);

          // Try multiple endpoints in case one fails
          let respuesta;
          let resultado;

          try {
            // First try by alpha code
            respuesta = await fetch(
              `https://restcountries.com/v3.1/alpha/${pais}`,
            );
            if (respuesta.ok) {
              resultado = await respuesta.json();
              if (resultado && resultado.length > 0) {
                guardarResultado(resultado[0]);
                guardarConsultar(false);
                guardarCargando(false);
                return;
              }
            }
          } catch (e) {
            console.log("Alpha endpoint failed, trying name endpoint");
          }

          // Fallback: try by name
          respuesta = await fetch(
            `https://restcountries.com/v3.1/name/${pais}`,
          );

          if (!respuesta.ok) {
            throw new Error(`HTTP error! status: ${respuesta.status}`);
          }

          resultado = await respuesta.json();
          console.log("Resultado:", resultado);

          if (resultado && resultado.length > 0) {
            guardarResultado(resultado[0]);
          } else {
            throw new Error("No se encontraron resultados");
          }

          guardarConsultar(false);
        } catch (error) {
          console.error("Error en la consulta:", error);
          Alert.alert(
            "Error",
            "No hay resultado. Intente con otra ciudad o país.",
          );
          guardarConsultar(false);
          guardarResultado({});
        } finally {
          guardarCargando(false);
        }
      }
    };
    consultarPais();
  }, [consultar]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Consulta de Países</Text>
        </View>

        <View style={styles.card}>
          <Formulario
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsultar={guardarConsultar}
          />
        </View>

        {cargando && (
          <View style={styles.card}>
            <ActivityIndicator size="large" color="#6200ee" />
            <Text style={styles.loadingText}>Consultando...</Text>
          </View>
        )}

        {Object.keys(resultado).length > 0 && !cargando && (
          <Pais resultado={resultado} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scroll: {
    flex: 1,
  },
  header: {
    backgroundColor: "#6200ee",
    padding: 20,
    paddingTop: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
});
