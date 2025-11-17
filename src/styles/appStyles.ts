import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  input: {
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 8,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7ECF5",
  },
  closeModalButton: {
    alignSelf: "flex-end",
    padding: 20,
    fontSize: 28,
  },
  addButton: {
    backgroundColor: "#25ad97ff",
    borderRadius: 20,
    padding: 8,
    position: "absolute",
    top: 1,
    right: 1,
    zIndex: 9999,
    elevation: 4,
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    position: "relative",
    zIndex: 9999,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  booksContainer: {
    width: "100%",
    marginVertical: 8,
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
});