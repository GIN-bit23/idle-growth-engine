import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type StatCardProps = {
  label: string;
  value: ReactNode;
};

export const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a26',
    borderRadius: 16,
    padding: 12,
    gap: 6,
    minWidth: 110
  },
  label: {
    color: '#9fa1b0',
    fontSize: 12,
    textTransform: 'uppercase'
  },
  value: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700'
  }
});
