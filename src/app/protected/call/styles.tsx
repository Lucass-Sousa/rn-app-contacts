import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  contactInfo: {
    alignItems: "center",
    marginTop: 40,
  },
  avatarContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.2)",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  name: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  phoneNumber: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 20,
    marginBottom: 16,
  },
  timer: {
    color: "white",
    fontSize: 22,
    fontWeight: "400",
    opacity: 0.9,
  },
  bottomControls: {
    alignItems: "center",
    marginBottom: 40,
  },
  hangupButton: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: "#FF3B30",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#FF3B30",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 10,
    marginBottom: 12,
  },
  hangupLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1924",
  },
  errorText: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  backLink: {
    color: "#818CF8",
    fontSize: 16,
  },
});

export default styles;
