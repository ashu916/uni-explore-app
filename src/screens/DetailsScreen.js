import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppText from '../components/common/AppText';

export default function DetailsScreen({ route }) {
    // Data  //
  const { item } = route.params;

  
// UI  //
  return (
    <View style={styles.container}>
      {/* Cover Section */}
      <LinearGradient colors={['#4A6CF7', '#7F53FF']} style={styles.cover}>
        <AppText style={styles.title}>{item.university}</AppText>
        <AppText style={styles.country}>{item.country}</AppText>
      </LinearGradient>

      {/* Content Card */}
      <View style={styles.card}>
        <AppText style={styles.heading}>About</AppText>

        <AppText style={styles.desc}>{item.description}</AppText>
      </View>
    </View>
  );
}

// Styles  //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  cover: {
    height: 200,
    justifyContent: 'flex-end',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  country: {
    color: '#E0E0E0',
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  desc: {
    color: '#444',
    lineHeight: 20,
  },
});
