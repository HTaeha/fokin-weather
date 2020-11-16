import React from "react"
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native"
import PropTypes from "prop-types"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { TabView } from 'react-native-tab-view'

const weatherOptions = {
    Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"],
      title: "Thunderstorm in the house",
      subtitle: "Actually, outside of the house"
    },
    Drizzle: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "Drizzle",
      subtitle: "Is like rain 🏳️‍🌈"
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"],
      title: "Raining like a MF",
      subtitle: "For more info look outside"
    },
    Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: "Cold as balls",
      subtitle: "Do you want to build a snowman?" 
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "Atmosphere",
      subtitle: "I don't know"
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"],
      title: "Sunny",
      subtitle: "The weather is very good!"
    },
    Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"],
      title: "Clouds",
      subtitle: "I know, very boring"
    },
    Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Mist!",
      subtitle: "It's like you have no glasses on."
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Dusty",
      subtitle: "Thanks a lot china."
    },
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Haze",
      subtitle: "Just don't go outside."
    }
}

const FirstRoute = ({temp, condition}) => (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfConttainer}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
            <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
)

const SecondRoute = () => (
    <LinearGradient
        colors={weatherOptions["Thunderstorm"].gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfConttainer}>
            <MaterialCommunityIcons name={weatherOptions["Thunderstorm"].iconName} size={96} color="white" />
            <Text style={styles.temp}>24°</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{weatherOptions["Thunderstorm"].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions["Thunderstorm"].subtitle}</Text>
        </View>
    </LinearGradient>
)

const ThridRoute = () => (
    <LinearGradient
        colors={weatherOptions["Snow"].gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfConttainer}>
            <MaterialCommunityIcons name={weatherOptions["Snow"].iconName} size={96} color="white" />
            <Text style={styles.temp}>365°</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{weatherOptions["Snow"].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions["Snow"].subtitle}</Text>
        </View>
    </LinearGradient>
)

const initialLayout = {
    width: Dimensions.get('window').width
}

//export default function Weather({ temp, condition }) {
export default class Weather extends React.Component {
    handleIndexChange = index => {
        this.setState({ index });
    }
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'hello' },
            { key: 'second', title: 'world' },
            { key: 'third', title: 'man' }
        ],
    };

    renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <FirstRoute temp={this.props.temp} condition={this.props.condition} />
            case 'second':
                return <SecondRoute />
            case 'third':
                return <ThridRoute />
            default:
                return null
        }
    }

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this.renderScene}
                onIndexChange={this.handleIndexChange}
                initialLayout={initialLayout}
            />
        )
    }
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Dust",
        "Haze",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfConttainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center"
    }
})