import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(busqueda.pais ?? "");

  const [items, setItems] = useState([
    { label: "-- Seleccione un país --", value: "" },
    { label: "El Salvador", value: "SV" },
    { label: "Guatemala", value: "GT" },
    { label: "Honduras", value: "HN" },
    { label: "Nicaragua", value: "NI" },
    { label: "Costa Rica", value: "CR" },
    { label: "Panamá", value: "PA" },
    { label: "Canadá", value: "CA" },
    { label: "Estados Unidos", value: "US" },
    { label: "Argentina", value: "AR" },
    { label: "Colombia", value: "CO" },
    { label: "Brasil", value: "BR" },
    { label: "Perú", value: "PE" },
  ]);

  const consultarPais = () => {
    if (!value || value.trim() === "") {
      Alert.alert("Atención", "Debe seleccionar un país", [{ text: "Entendido" }]);
      return;
    }
    guardarConsultar(true);
  };

  return (
    <View>
      <Text style={styles.label}>Selecciona un país</Text>

      <DropDownPicker
        style={styles.dropdown}
        containerStyle={styles.dropdownContainer}
        dropDownContainerStyle={styles.dropdownList}
        textStyle={styles.dropdownText}
        selectedItemLabelStyle={styles.dropdownSelectedText}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="-- Seleccione un país --"
        placeholderStyle={styles.placeholder}
        onChangeValue={(val) => {
          setValue(val);
          guardarBusqueda({ ...busqueda, pais: val });
        }}
        listMode="MODAL"
        modalProps={{ animationType: "fade" }}
        modalContentContainerStyle={styles.modalContent}
        modalTitleStyle={styles.modalTitle}
        modalTitle="Elige un país"
        dropDownDirection="auto"
        scrollViewProps={{ nestedScrollEnabled: true }}
        ArrowDownIconComponent={() => (
          <Text style={styles.arrowIcon}>▼</Text>
        )}
        ArrowUpIconComponent={() => (
          <Text style={styles.arrowIcon}>▲</Text>
        )}
      />

      <TouchableOpacity
        style={styles.btnBuscar}
        onPress={() => consultarPais()}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBuscar}>Buscar País</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#a0a0c0",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  dropdownContainer: {
    marginBottom: 24,
  },
  dropdown: {
    backgroundColor: "#2a2a4a",
    borderColor: "#3d3d6b",
    borderRadius: 12,
    minHeight: 52,
  },
  dropdownText: {
    color: "#e0e0ff",
    fontSize: 15,
  },
  dropdownSelectedText: {
    color: "#818cf8",
    fontWeight: "700",
  },
  placeholder: {
    color: "#6060a0",
    fontSize: 15,
  },
  arrowIcon: {
    color: "#818cf8",
    fontSize: 18,
    marginRight: 4,
  },
  modalContent: {
    backgroundColor: "#1e1e3a",
    paddingTop: 16,
  },
  modalTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
  btnBuscar: {
    height: 52,
    backgroundColor: "#6366f1",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  textoBuscar: {
    color: "#ffffff",
    fontWeight: "800",
    textTransform: "uppercase",
    fontSize: 15,
    letterSpacing: 1.5,
  },
});

export default Formulario;