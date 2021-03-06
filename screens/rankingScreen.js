import React from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from "expo/build/effects/LinearGradient";
import HeaderMenu from "../components/headerMenu";
import dataRanking from '../helpers/rankingData'
import RankingItem from '../components/rankingItem'
import MainStyle from "../Style";


class RankingScreen extends React.Component {

    _displayDetailForQuest = (idTeam) => {
        this.props.navigation.navigate('ProfilRankingScreen', {idTeam: idTeam});
    };

    _displayDetailForPremium = () => {
        this.props.navigation.navigate('RankingPremiumScreen');
    };

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#ca8d21', '#f452b7']} style={styles.main_container}>
                    <HeaderMenu/>
                    <View style={styles.content_container}>
                        <Text style={styles.name_ranking}>Classement Ynitié</Text>
                    </View>
                    <View style={styles.flatlist_container}>
                        <FlatList
                            style={styles.flatlist_content}
                            data={dataRanking}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <RankingItem team={item} displayDetailForQuest={this._displayDetailForQuest}/>}
                        />
                    </View>
                    <View style={MainStyle.button_container}>
                        <TouchableOpacity style={MainStyle.button} onPress={this._displayDetailForPremium}>
                            <Text style={MainStyle.button_text}>Classement Premyum</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

export default RankingScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    content_container:{
        paddingTop: 120
    },
    name_ranking:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    flatlist_container:{
        height: 420
    },
    flatlist_content:{
        marginHorizontal: 30,
        marginTop: 40,

    }
});