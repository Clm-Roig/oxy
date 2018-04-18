//@flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as Style from '../assets/style';

/*
    Bouton Oxy customisable.
    text: le texte à afficher dans le bouton
    handler: la fonction à appeler quand on presse le bouton
*/
type Props = {
    handler: () => mixed,
    text: string
}
export const MenuButton = (props: Props) => {
    return (
        <TouchableOpacity style = { Style.menuButton } onPress = {props.handler}>
            <Text style = { Style.textMenu }> {props.text} </Text>
        </TouchableOpacity>
    )
}
