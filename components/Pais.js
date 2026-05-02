import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";
import { traducirIdioma } from "../utils/idiomas";

const Pais = ({ resultado }) => {
  const [nombre, setNombre] = useState(null);
  const [capital, setCapital] = useState(null);
  const [region, setRegion] = useState(null);
  const [idioma, setIdioma] = useState(null);

  useEffect(() => {
    const datos = Object.values(resultado);
    if (datos.length === 0) return;
    const pais = datos[0];
    
    setNombre(pais.translations?.spa?.common ?? pais.name?.common);
    setCapital(pais.capital?.[0] ?? "--");
    setRegion(pais.region ?? "--");
    setIdioma(Object.values(pais.languages ?? {}).map(traducirIdioma).join(", ") || "--");
  }, [resultado]);

  if (!nombre) return null;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.titulo}>{nombre}</Text>
        <View style={styles.divider} />
        <InfoRow etiqueta="Capital" valor={capital} />
        <InfoRow etiqueta="Región" valor={region} />
        <InfoRow etiqueta="Idiomas" valor={idioma} />
      </Card.Content>
    </Card>
  );
};

const InfoRow = ({ etiqueta, valor }) => (
  <View style={styles.fila}>
    <Text style={styles.etiqueta}>{etiqueta}</Text>
    <Text style={styles.valor}>{valor}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e3a",
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#2e2e50",
    elevation: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#2e2e50",
    marginBottom: 16,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  etiqueta: {
    fontSize: 12,
    fontWeight: "600",
    color: "#a0a0c0",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  valor: {
    fontSize: 15,
    color: "#e0e0ff",
    fontWeight: "500",
    flexShrink: 1,
    textAlign: "right",
    marginLeft: 10,
  },
});

export default Pais;