import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// import actions
import { getProducts, getCarousel } from '../actions';

// import component
import ProductCard from '../components/product_card';
import ProductCarousel from '../components/product_carousel';
import Header from '../components/header';
import Chips from '../components/chips';

// variable
const col = 2;
const WIDTH = Dimensions.get('screen').width;

class Home extends React.Component {
    componentDidMount() {
        this.props.getProducts();
        this.props.getCarousel();
    }

    _formatData = (products, col) => {
        let data = [...products];
        const filldata =
            data.length % col === 0 ? 0 : col - (data.length % col);
        // console.log('need data : ', filldata);

        for (let i = 0; i < filldata; i++) {
            data.push({ id: data.length + 1, empty: true });
        }
        return data;
    };

    _renderItem = ({ item }) => {
        if (item.empty) {
            return <ProductCard />;
        } else {
            return (
                <ProductCard
                    title={item.nama}
                    image={item.images[0]}
                    rating={item.rating}
                    harga={item.harga}
                    brand={item.brand}
                    onTouch={() =>
                        this.props.navigation.navigate('details', {
                            product: item,
                        })
                    }
                />
            );
        }
    };

    render() {
        const { products, carousel } = this.props;
        return (
            <View style={styles.root}>
                <Header title="Home" />
                <Carousel
                    data={carousel}
                    renderItem={({ item }) => (
                        <ProductCarousel image={item.image} />
                    )}
                    sliderWidth={WIDTH}
                    itemWidth={WIDTH}
                    autoplay
                    autoplayInterval={5000}
                />
                <Text style={styles.title}>Products</Text>
                <Chips />
                <FlatList
                    data={this._formatData(products, col)}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this._renderItem}
                    style={styles.list}
                    numColumns={col}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    list: {
        paddingHorizontal: 10,
        height: '45%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'JosefinSans-Regular',
        paddingHorizontal: 15,
        paddingVertical: 6,
    },
});

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        carousel: state.productReducer.carousel,
    };
};

const actions = { getProducts, getCarousel };

export default connect(mapStateToProps, actions)(Home);
