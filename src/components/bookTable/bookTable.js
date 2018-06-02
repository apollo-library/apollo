//React imports
import React, { Component } from 'react';

import * as styles from './bookTableStyles.js'
import {Button} from './../../globalStyles.js'

class BookTable extends Component {

    calculateStars(rating) {
        let starsToRender = [];

        for (let i = 0; i < 5; i++) {
                if (i < rating) {
                    starsToRender.push(
                        <styles.Star key={i} xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 28 27">
                            <styles.StarPath colour={this.props.colour} filled d="M14.5,1.4l2.7,5.5c0.2,0.4,0.6,0.7,1.1,0.8l6.1,0.9c1.2,0.2,1.7,1.7,0.8,2.6l-4.4,4.3c-0.4,0.3-0.5,0.8-0.4,1.3
                            l1,6c0.2,1.2-1.1,2.2-2.2,1.6l-5.4-2.9c-0.4-0.2-1-0.2-1.4,0L7,24.4c-1.1,0.6-2.4-0.4-2.2-1.6l1-6c0.1-0.5-0.1-1-0.4-1.3l-4.4-4.3
                            c-0.9-0.9-0.4-2.4,0.8-2.6l6.1-0.9c0.5-0.1,0.9-0.4,1.1-0.8l2.7-5.5C12.3,0.3,13.9,0.3,14.5,1.4z"/>
                        </styles.Star>
                    )
                } else {
                    starsToRender.push(
                        <styles.Star key={i} xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 28 27">
                            <styles.StarPath colour={this.props.colour} d="M14.5,1.4l2.7,5.5c0.2,0.4,0.6,0.7,1.1,0.8l6.1,0.9c1.2,0.2,1.7,1.7,0.8,2.6l-4.4,4.3c-0.4,0.3-0.5,0.8-0.4,1.3
                            l1,6c0.2,1.2-1.1,2.2-2.2,1.6l-5.4-2.9c-0.4-0.2-1-0.2-1.4,0L7,24.4c-1.1,0.6-2.4-0.4-2.2-1.6l1-6c0.1-0.5-0.1-1-0.4-1.3l-4.4-4.3
                            c-0.9-0.9-0.4-2.4,0.8-2.6l6.1-0.9c0.5-0.1,0.9-0.4,1.1-0.8l2.7-5.5C12.3,0.3,13.9,0.3,14.5,1.4z"/>
                        </styles.Star>
                    )
                }
        }

        return starsToRender
    }

    formatDueDate(date) {
        let dueDate = new Date(date);

        dueDate = dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();

        return dueDate;
    }

    render() {
        let tableBody;

        if (this.props.type === "dueSoon") {
            tableBody = this.props.data.map((rowData, index) =>
                (
                    <styles.TableRow key={index} colour={this.props.colour}>
                        <styles.TableText>{rowData.title}</styles.TableText>
                        <styles.TableText>{rowData.author}</styles.TableText>
                        <styles.TableText>{this.calculateStars(rowData.rating)}</styles.TableText>
                        <styles.TableText>{this.formatDueDate(rowData.dueDate)}</styles.TableText>
                        <styles.TableButton><Button colour={this.props.colour}>{this.props.buttonText}</Button></styles.TableButton>
                    </styles.TableRow>
                )
            )
        } else if (this.props.type === "recommended") {
            tableBody = this.props.data.map((rowData, index) =>
                (
                    <styles.TableRow key={index} colour={this.props.colour}>
                        <styles.TableText>{rowData.title}</styles.TableText>
                        <styles.TableText>{rowData.author}</styles.TableText>
                        <styles.TableText>{this.calculateStars(rowData.rating)}</styles.TableText>
                        <styles.TableButton><Button colour={this.props.colour}>{this.props.buttonText}</Button></styles.TableButton>
                    </styles.TableRow>
                )
            )
        } else if (this.props.type === "history") {
            tableBody = this.props.data.map((rowData, index) =>
                (
                    <styles.TableRow key={index} colour={this.props.colour}>
                        <styles.TableText>{rowData.title}</styles.TableText>
                        <styles.TableText>{rowData.author}</styles.TableText>
                        <styles.TableText>{this.calculateStars(rowData.rating)}</styles.TableText>
                        <styles.TableButton><Button colour={this.props.colour}>{this.props.buttonText}</Button></styles.TableButton>
                    </styles.TableRow>
                )
            )
        }


        return (
            <styles.Table>
                <styles.TableHeader colour={this.props.colour}>
                    {this.props.titles.map((title, index) =>
                        (
                            <styles.TableHeading key={index} colour={this.props.colour}>{title}</styles.TableHeading>
                        )
                    )}
                </styles.TableHeader>

                {tableBody}

            </styles.Table>
        );
    }
}

export default BookTable;
