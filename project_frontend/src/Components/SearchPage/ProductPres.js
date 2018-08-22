import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import Pagination from './Pagination';
import ScrollButton from './ScrollToTopButton';

import GridList, { GridListTile } from 'material-ui/GridList';//https://material-ui.com/demos/grid-list/
import { CircularProgress } from 'material-ui/Progress';//https://material-ui.com/demos/progress/
import Subheader from 'material-ui/List/ListSubheader';
import Typography from 'material-ui/Typography';

import '../css/styles.css';


class ProductPres extends Component {

    // componentDidMount() {
    //     window.addEventListener('scroll', this.props.handleScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.props.handleScroll);
    // }

    render() {

        //console.log('ProductPres this.props ' + this.props)
        const { result, items, hasErrored, isLoading, totalCount } = this.props;//присваиваем одноименным переменным соотсветсвующие значения props синтаксис ES6

        const col = window.innerWidth < 600 ? 1 : 4;//Количество столбцов
        const nPerPage = window.innerWidth < 600 ? 15 : 50;//Количество элементов 

        if (hasErrored) {
            return (
                <div className='container'>
                    <Typography variant="display2">Ошибка загрузки!</Typography>
                </div>
            );
        };

        if (isLoading) {
            return (
                <div className='container'>
                    <CircularProgress className='loading' size={100} />
                </div>
            );
        };
        //maxWidth: window.innerWidth * 2 / 3
        return (
            <div className='container' style={{ maxWidth: window.innerWidth }}>
                <GridList cols={col}>

                    <GridListTile
                        cols={col}
                        style={{ height: 'auto' }}>
                        <Subheader component='div'> Результат поиска "{result}":   {totalCount}</Subheader>
                    </GridListTile>

                    {
                        items.map(
                            v => (
                                <GridListTile
                                    key={v.url}
                                    style={{ height: 'auto', paddingTop: 5 }}>
                                    <Product itemInfo={v} />
                                </GridListTile>
                            )
                        )
                    }

                </GridList>

                <Pagination 
                pageNumber={this.props.pageNumber} t
                otalCount={Math.ceil(totalCount / nPerPage)} />

                <br />

                <ScrollButton 
                scrollStepInPx="80" 
                delayInMs="10" />

            </div>
        );
    }
}

ProductPres.propTypes = {// Props передаются из родительского компонента ProductContainer
    result: PropTypes.string,
    items: PropTypes.array,
    hasErrored: PropTypes.bool,
    isLoading: PropTypes.bool,
    totalCount: PropTypes.number,
    //handleScroll: PropTypes.string,
}


export default ProductPres;



