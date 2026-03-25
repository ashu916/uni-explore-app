import { View, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import AppText from '../common/AppText';

export default function ProgramCard({ item, onPress, isSaved, onSave }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <AppText style={styles.title}>{item.university}</AppText>

        <Pressable onPress={onSave}>
          <AppText style={styles.heart}>{isSaved ? '❤️' : '🤍'}</AppText>
        </Pressable>
      </View>

      <AppText style={styles.country}>{item.country}</AppText>
      <AppText numberOfLines={2}>{item.description}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  heart: {
    fontSize: 18,
  },
  country: {
    color: '#777',
    marginVertical: 4,
  },
});
