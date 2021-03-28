import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator,
    // FlatList,
    ScrollView,
    Dimensions
} from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';
const data = require('../../assets/data/products.json');
import ProductList from './ProductList';
const productsCategories = require('../../assets/data/categories.json');
import SearchedProducts from './SearchedProducts';
import Banner from '../Shared/Banner';
import CategoryFilter from './CategoryFilter';

var { height } = Dimensions.get("window");
export default function ProductContainer() {
    const [products, setproducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        setproducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setCategories(productsCategories);
        setProductsCtg(data);
        setActive(-1);
        setInitialState(data);
        // this optional return can pe passed as func for cleanup purpose.
        // It runs when the componennt unmounts.
        return () => {
            setproducts([]);
            setProductsFiltered([]);
            setFocus();
            setCategories([]);
            setActive();
            setInitialState([]);
        }
    }, [])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }
    const openList = () => {
        setFocus(true);
    }
    const onBlur = () => {
        setFocus(false);
    }
    //  Category
    const changeCategory = (ctg) => {
        {
            console.warn("category", ctg);
            ctg === 'all'
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter((i) => i.category.$oid == ctg),
                        
                      ),setActive(true)
                ];
        }
    }
    console.warn('productsCtg--->', productsCtg);
    console.warn('productId------->',products[2].category.$oid);
    return (
        <Container>
            <Header searchBar rounder>
                <Item style={styles.searchBar}>
                    <Icon name="ios-search" />
                    <Input
                        placeholder="Search"
                        onFocus={openList}
                        onChangeText={(text) => searchProduct(text)}
                    />
                    {focus == true ? (
                        <Icon onPress={onBlur} name={'ios-close'}></Icon>
                    ) : null}
                </Item>
            </Header>
            { focus == true ? (
                <SearchedProducts
                    productsFiltered={productsFiltered}
                />
            ) : (
                <ScrollView>
                    <View>
                        <View>
                            <Banner />
                        </View>
                        <View>
                            <CategoryFilter
                                categories={categories}
                                categoryFilter={changeCategory}
                                productsCtg={productsCtg}
                                active={active}
                                setActive={setActive}
                            />
                        </View>
                        {productsCtg.length > 0 ? (
                            <View style={styles.listContainer}>
                                {productsCtg.map((item) => {
                                    return (
                                        <ProductList
                                            key={item.name}
                                            item={item}
                                        />
                                    )
                                })}
                            </View>
                        ) : (
                            <View style={styles.center, { height: height / 2 }}>
                                <Text>No products found</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            )
            }

        </Container >
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    listContainer: {
        height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    searchBar: {
        borderColor: 'green',
        borderRadius: 10,
        backgroundColor: '#c9f4f6',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#45dae0',
        borderStyle: 'solid'
    },
    center: {
        justifyContent: 'center',
        marginTop: 20
    }
});