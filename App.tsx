import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BALANCE } from './src/config/balance';
import { getGeneratorCost, getGeneratorProduction } from './src/core/economy';
import { useIdleGame } from './src/systems/useIdleGame';
import { StatCard } from './src/ui/components/StatCard';

const formatNumber = (value: number) => {
  if (value < 1000) {
    return value.toFixed(1);
  }
  return Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(value);
};

export default function App() {
  const { state, incomePerSecond, tap, buyGenerator } = useIdleGame();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>🌿 Kush Idle Clicker</Text>
          <Text style={styles.subtitle}>Starter build for mobile (Expo + React Native)</Text>
        </View>

        <View style={styles.statsRow}>
          <StatCard label="Kush" value={formatNumber(state.kush)} />
          <StatCard label="Kush/s" value={formatNumber(incomePerSecond)} />
          <StatCard label="Taps" value={state.totalTapCount} />
        </View>

        <Pressable style={styles.tapButton} onPress={tap}>
          <Text style={styles.tapButtonText}>Tap to Grow (+{BALANCE.clickPower})</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>Generators</Text>
        {BALANCE.generators.map((generator) => {
          const level = state.generators[generator.id];
          const cost = getGeneratorCost(generator.baseCost, level, BALANCE.generatorCostGrowth);
          const production = getGeneratorProduction(generator.baseProduction, Math.max(level, 1));
          const disabled = state.kush < cost;

          return (
            <Pressable
              key={generator.id}
              style={[styles.generatorRow, disabled && styles.generatorRowDisabled]}
              onPress={() => buyGenerator(generator.id)}
            >
              <View>
                <Text style={styles.generatorName}>{generator.name}</Text>
                <Text style={styles.generatorMeta}>Owned: {level}</Text>
                <Text style={styles.generatorMeta}>+{production.toFixed(1)} kush/s each</Text>
              </View>
              <Text style={styles.generatorCost}>Buy {formatNumber(cost)}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1018'
  },
  content: {
    padding: 16,
    gap: 14
  },
  header: {
    marginTop: 8,
    marginBottom: 6,
    gap: 4
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800'
  },
  subtitle: {
    color: '#9fa1b0'
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8
  },
  tapButton: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#31c46d',
    paddingVertical: 22,
    alignItems: 'center'
  },
  tapButtonText: {
    color: '#06110b',
    fontSize: 20,
    fontWeight: '900'
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8
  },
  generatorRow: {
    backgroundColor: '#181b2c',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  generatorRowDisabled: {
    opacity: 0.6
  },
  generatorName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700'
  },
  generatorMeta: {
    color: '#9fa1b0',
    fontSize: 13
  },
  generatorCost: {
    color: '#31c46d',
    fontSize: 15,
    fontWeight: '700'
  }
});
