import { StyleSheet } from "react-native";
import colors from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
    padding: 24,
    justifyContent: "center",
  },
  header: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.dark.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.dark.textSecondary,
    textAlign: "center",
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: colors.dark.card,
    borderRadius: 12,
    padding: 16,
    color: colors.dark.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.dark.border,
  },
  button: {
    backgroundColor: colors.dark.primary,
    borderRadius: 12,
    padding: 18,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  footerText: {
    color: colors.dark.textSecondary,
    fontSize: 14,
  },
  linkText: {
    color: colors.dark.primary,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default styles;
