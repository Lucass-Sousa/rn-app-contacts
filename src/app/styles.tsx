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
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  headerTitle: {
    color: colors.dark.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    flex: 1,
    width: "100%",
    paddingTop: 10,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    backgroundColor: colors.dark.card,
    borderRadius: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12, // Um visual mais squared/rounded moderno
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    color: colors.dark.text,
    fontSize: 16,
    fontWeight: '600',
  },
  contactPhone: {
    color: colors.dark.textSecondary,
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    paddingRight: 4,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: colors.dark.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
  }
});

export default styles;
