import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, FlatList, Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/appStyles";
import { useHomeViewModel } from "../viewmodel/useHomeViewModel";


export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [pages, setPages] = useState('');

    const { books, error, handleAddBook} = useHomeViewModel();

    return (
        <View style={styles.container}>
            <View style={styles.viewButton}>

                <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Ionicons name="add" size={20}/>
                </Pressable>
                
            </View>

            <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modal}>

                    <Pressable style={styles.closeModalButton} onPress={() => setModalVisible(false)}>
                        <Ionicons color={"#333"} name="close" size={24}/>
                    </Pressable>

                    <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder="Titulo"/>
                    <TextInput value={author} onChangeText={setAuthor} style={styles.input} placeholder="Autor"/>
                    <TextInput value={year} keyboardType="numeric" onChangeText={setYear} style={styles.input} placeholder="Ano"/>
                    <TextInput value={pages} keyboardType="numeric" onChangeText={setPages} style={styles.input} placeholder="Páginas"/>

                    <Button title="Adicionar Livro" onPress={() => {
                        handleAddBook(title, author, Number(year), Number(pages));
                        setTitle("");
                        setAuthor("");
                        setYear("");
                        setPages("");
                        setModalVisible(false);
                    }}/>
                    {error && <Text>Erro: {error}</Text>}
                </View>
            </Modal>

            <View style={styles.listContainer}> {/* View para livros adicionados */}                
                <FlatList
                ListEmptyComponent={<Text>Nenhum livro adicionado.</Text>}
                data={books} 
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item }) => (
                    <View style={styles.booksContainer}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text>{item.author}</Text>
                        <Text>
                        {item.year} • {item.pages} páginas
                        </Text>
                    </View>
                )}/>
            </View>
            
            
        </View>
    )
}