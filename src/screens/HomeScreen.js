import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppText from '../components/common/AppText';
import ProgramCard from '../components/program/ProgramCard';
import { programs } from '../data/programs';

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [saved, setSaved] = useState([]);

// Bookmarking Logic  //

  useEffect(() => {
    loadSaved();
  }, []);

  const loadSaved = async () => {
    try {
      const data = await AsyncStorage.getItem('BOOKMARKS');
      if (data) setSaved(JSON.parse(data));
    } catch (e) {
      console.log('Error loading bookmarks');
    }
  };
  const saveBookmarks = async (data) => {
    try {
      await AsyncStorage.setItem('BOOKMARKS', JSON.stringify(data));
    } catch (e) {
      console.log('Error saving bookmarks', e);
    }
  };
  const toggleSave = (id) => {
    let updated;

    if (saved.includes(id)) {
      updated = saved.filter((item) => item !== id);
    } else {
      updated = [...saved, id];
    }

    setSaved(updated);
    saveBookmarks(updated);
  };
// Search Logic  //
  const filteredData = programs.filter((item) =>
    item.university.toLowerCase().includes(search.toLowerCase())
  );

  // UI  //

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient colors={['#4A6CF7', '#7F53FF']} style={styles.header}>
        <AppText style={styles.title}>🎓 UniExplore</AppText>
        <AppText style={styles.subtitle}>Discover global universities</AppText>
      </LinearGradient>

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search university..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      <View style={styles.list}>
        {/* List */}
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          ListEmptyComponent={() => (
            <View style={styles.empty}>
              <AppText style={styles.emptyTitle}>No Programs Found</AppText>
              <AppText style={styles.emptySub}>
                Try searching something else
              </AppText>
            </View>
          )}
          renderItem={({ item }) => (
            <ProgramCard
              item={item}
              isSaved={saved.includes(item.id)}
              onSave={() => toggleSave(item.id)}
              onPress={() => navigation.navigate('Details', { item })}
            />
          )}
        />
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
  header: {
    padding: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    color: '#E0E0E0',
    marginTop: 4,
  },
  searchBox: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 14,
    elevation: 3,
  },
  list: {
    marginHorizontal: 10,
    height: '80%',
  },
  empty: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  emptySub: {
    color: '#777',
    marginTop: 5,
  },
});
