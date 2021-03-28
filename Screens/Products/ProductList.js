import React from 'react'
import { TouchableOpacity, View, Dimensions } from 'react-native';
import ProductCard from './ProductCard';

var { width } = Dimensions.get("window");

export default function ProductList(props) {
    const { item } = props;
    return (
        <TouchableOpacity>
            <View style={{width: width/2, backgroundColor: 'gainsboro'}}>
                <ProductCard
                {...item}
                />
            </View>
        </TouchableOpacity>
    )
}
