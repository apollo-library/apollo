//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './reportTableStyles.js'

import * as API from './../../../api';

//Config
import config from './../../../config.js'

class ReportTable extends Component {
    constructor() {
        super()

        this.state = {
            accent: 'accent3'
        };
    }

    render() {
        let TableContent;

        if (Array.isArray(this.props.data.data)) {
            TableContent = this.props.data.data.map((rowData, index) =>
            (
                <styles.TableRow key={index} colour={this.state.accent}>
                    <styles.TableText>{rowData.display.title}</styles.TableText>
                    <styles.TableText>{rowData.display.author}</styles.TableText>
                    <styles.TableText>{rowData.display.name}</styles.TableText>
                </styles.TableRow>
            )
        )
        }


        console.log(this.props.data)
        return (
            <styles.Table>
                <styles.TableHeader colour={this.state.accent}>
                    {this.props.table.map((title, index) =>
                        (
                            <styles.TableHeading key={index} colour={this.state.accent}>{title.display}</styles.TableHeading>
                        )
                    )}
                </styles.TableHeader>
                
                
                {TableContent}

            </styles.Table>
        );
    }
}

export default ReportTable;

/*
{this.props.titles.map((title, index) =>
                        (
                            <styles.TableHeading key={index} colour={this.props.colour}>{title}</styles.TableHeading>
                        )
                    )}
                    */