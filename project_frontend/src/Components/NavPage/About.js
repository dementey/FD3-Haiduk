import React from 'react';

import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import img from '../../Image/1_QERgzuzphdQz4e0fNs1CFQ.gif';

import '../css/Home.css';

const About = () => (
    <div className='container'>
        <Typography variant='display1'>Образовательный центр Парка высоких технологий</Typography>
        <Typography variant='caption' gutterBottom={true}>Developer: Yang Shi, Email: ys2843@nyu.edu</Typography>
        <Typography variant='subheading'>Project Name</Typography>
        <Typography variant='body1' gutterBottom={true}>Skincare Ingredients Look up website for Pregnant
            Women</Typography>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Modules</TableCell>
                    <TableCell>Techniques</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Front-End</TableCell>
                    <TableCell>React, React-Router, Redux</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Back-End</TableCell>
                    <TableCell>Node.js, RESTful API, MongoDB</TableCell>
                </TableRow>

            </TableBody>
        </Table>

        <Typography variant='body2'>Pipelines</Typography>
        <Typography variant='body1' gutterBottom={true}>After the data is parsed as Scrapy items, they are passed into
            pipelines which enable data processing and storing. In this project, we want to figure out whether a product
            contains harmful ingredients for pregnant, this process is done through pipelines. For each item, string
            search is applied to the ingredients field. Harmful ingredients can be found and added to items’ unsafe
            ingredients field. At last, items are sent out and stored into MongoDB.
            According to U.S. FOOD & DRUG website and special thanks to my wife’s help, harmful ingredients are
            sorted out as follow.
        </Typography>

            <img src={img} alt="logo" className="home-logo" />

    </div>


);

export default About;
