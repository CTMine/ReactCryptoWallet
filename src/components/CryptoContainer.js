import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;

        //console.log('crypto in renderCards: ', crypto.data.BTC.name)
        /*
        return crypto.data.map((coin) => 
            <CoinCard 
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.quote.USD.price}
                percent_change_24h={coin.quote.USD.percent_change_24h}
                percent_change_7d={coin.quote.USD.percent_change_7d}
            />
        ) */
        return (
            [
            <CoinCard 
                key={crypto.data.BTC.name}
                coin_name={crypto.data.BTC.name}
                symbol={crypto.data.BTC.symbol}
                price_usd={crypto.data.BTC.quote.USD.price}
                percent_change_24h={crypto.data.BTC.quote.USD.percent_change_24h}
                percent_change_7d={crypto.data.BTC.quote.USD.percent_change_7d}
            />
            ,
            <CoinCard 
                key={crypto.data.ETH.name}
                coin_name={crypto.data.ETH.name}
                symbol={crypto.data.ETH.symbol}
                price_usd={crypto.data.ETH.quote.USD.price}
                percent_change_24h={crypto.data.ETH.quote.USD.percent_change_24h}
                percent_change_7d={crypto.data.ETH.quote.USD.percent_change_7d}
            />

            ,
            <CoinCard 
                key={crypto.data.LTC.name}
                coin_name={crypto.data.LTC.name}
                symbol={crypto.data.LTC.symbol}
                price_usd={crypto.data.LTC.quote.USD.price}
                percent_change_24h={crypto.data.LTC.quote.USD.percent_change_24h}
                percent_change_7d={crypto.data.LTC.quote.USD.percent_change_7d}
            />
            ,
            <CoinCard 
                key={crypto.data.XRP.name}
                coin_name={crypto.data.XRP.name}
                symbol={crypto.data.XRP.symbol}
                price_usd={crypto.data.XRP.quote.USD.price}
                percent_change_24h={crypto.data.XRP.quote.USD.percent_change_24h}
                percent_change_7d={crypto.data.XRP.quote.USD.percent_change_7d}
            />
            ]
        )
    }


    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )
        

    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)