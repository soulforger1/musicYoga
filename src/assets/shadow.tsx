import React from 'react';
import { View } from 'react-native'
import Svg, {
    Path
} from 'react-native-svg'

export const Shadow: React.FC<any> = () => {
    return (

        <Svg width="180" height="20" viewBox="0 0 180 14" fill="none">
            <Path d="M87.5679 13.2522C80.2093 12.95 27.089 13.1075 2.07412 13.2002C-0.0163698 13.208 -0.407938 10.2412 1.60132 9.66402L31.7403 1.00643C31.9018 0.960012 32.0691 0.936462 32.2372 0.936462H146.693C146.861 0.936462 147.028 0.960012 147.19 1.00643L177.719 9.77621C179.72 10.3508 179.346 13.2933 177.265 13.3007C151.623 13.3929 95.0179 13.5581 87.5679 13.2522Z" fill="#FAD693" />
        </Svg>

    )
}