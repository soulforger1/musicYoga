import React from 'react';
import Svg, {
    Path, Rect, Defs, Pattern, Use
} from 'react-native-svg'
import { Image, View } from 'react-native'

export const Headphones: React.FC<any> = () => {
    return (
        <View style={{ alignItems: "center"}}>
            <Svg width="68" height="56" viewBox="0 0 68 56" fill="none" style={{ alignItems: "center", zIndex: 999, marginTop: 8, marginRight: 5 }}>
                <Path d="M66.2043 45.4982C65.9224 49.5066 63.2043 55.9982 55.6502 54.3065C55.0661 53.624 56.1412 49.5809 56.7253 45.9683C57.3093 42.3558 56.4321 36.141 57.2051 35.9971C64.9982 35.686 66.4861 41.4897 66.2043 45.4982Z" fill="#FF5C5C" />
                <Path d="M1.966 45.499C2.24783 49.5074 4.966 55.999 12.5201 54.3073C13.1041 53.6249 11.632 50.9401 11.445 45.9692C11.258 40.9982 12.379 35.3126 11.2591 35.31C3.466 34.999 1.68416 41.4906 1.966 45.499Z" fill="#FF5C5C" />
                <Path d="M7.50845 38.4999C5.31057 29.5014 8.30529 0.586151 35.0061 1.49866C64.3091 2.49866 62.5047 32.4997 60.0993 38.9962" stroke="#FF5C5C" stroke-width="1.4" />
                <Path d="M58.7052 53.4971C60.2052 48.4971 61.2052 45.4971 59.7052 36.9971" stroke="#FF9595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M10.2051 53.4971C8.20508 48.9971 7.20508 41.9971 8.70508 36.4971" stroke="#FF9595" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>
            <Image style={{ height: 240, width: 245, zIndex: 0, position: "absolute" }} source={require('../assets/girl.png')} />
        </View>
    )
}