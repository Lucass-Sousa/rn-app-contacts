import { StyleSheet } from "react-native";
import colors from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dark.background,
  },

  header: {
    backgroundColor: colors.dark.header,
    height: 150,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  content: {
    flex: 1,
    width: "100%",
  },
});

export default styles;
