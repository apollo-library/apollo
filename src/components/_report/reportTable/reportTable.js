//React imports
import React, { Component } from 'react';


//Styles
import * as styles from './../../bookTable/bookTableStyles.js'
import * as reportStyles from './reportTableStyles.js'

import * as API from './../../../api';

//Config
import config from './../../../config.js'

class ReportTable extends Component {
    constructor() {
        super()

        this.state = {
            accent: 'accent3'
        };

        this.formatDueDate = this.formatDueDate.bind(this);
    }

    formatDueDate(date) {
        let dueDate = new Date(date);

        dueDate = dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();

        return dueDate;
    }

    render() {
        let TableContent;

        if (Array.isArray(this.props.data.data)) {
            TableContent = this.props.data.data.map((rowData, index) =>
            (
                <styles.TableRow key={index} colour={this.state.accent}>
                    <styles.TableText><reportStyles.TableLink to={'/book/' + rowData.raw.book._id}>{rowData.display.title}</reportStyles.TableLink></styles.TableText>
                    <styles.TableText>{rowData.display.author}</styles.TableText>
                    <styles.TableText><b>{rowData.display.reg}</b> {': ' + rowData.display.name}</styles.TableText>
                    <styles.TableText>{this.formatDueDate(rowData.display.due)}</styles.TableText>
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