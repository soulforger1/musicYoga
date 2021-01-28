import React from 'react';
import Svg, {
    Rect, Image
} from 'react-native-svg'

export const Girl: React.FC<any> = (props) => {
    return (
        <Svg width="262" height="250" viewBox="0 0 262 250" fill="none">
            <Rect width="260.673" height="249.013" />
            <Image width="571" height="545" source={require('./girl.png')}/>
        </Svg>
    )

}