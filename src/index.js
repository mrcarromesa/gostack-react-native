import React, { useState, useEffect } from 'react';
import {SafeAreaView, FlatList, Text, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

const App = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProject() {
      const { data } = await api.get('projects');
      setProjects(data);
    }
    loadProject();
  },[]);

  async function handleAddProject() {
    const { data } = await api.post('projects',{
      title: `Projeto ${new Date().getTime()}`,
      owner: 'Rodolfo',
    });

    console.log(data);

    setProjects([...projects, data]);
  }

  return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" translucent={true} />
    <SafeAreaView style={{flex:1, backgroundColor: '#7159c1'}}>
      <FlatList 
        data={projects}
        keyExtractor={(project) => project.id }
        renderItem={({item}) => (
          <Text key={item.id}>{item.title}</Text>

        )}
      />
      <TouchableOpacity onPress={handleAddProject} activeOpacity={0.6} style={{ backgroundColor: '#fff', height: 40, margin: 20, justifyContent: "center", alignItems: "center" }}>
        <Text>Adicionar Projeto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </>
  );
};

export default App;
