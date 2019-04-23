//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './../../bookTable/bookTableStyles.js'

class BookHistoryTable extends Component {
    constructor() {
        super()

        this.state = {
            accent: 'accent3',
            showDueDate: false,
        };

    }

    formatDueDate = (date) => {
        let dueDate = new Date(date);

        try {
            dueDate.toISOString();
        } catch(ex) {
            return false;
        }


        dueDate = dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();

        return dueDate;
    }

    render() {
        let TableContent;

        if (Array.isArray(this.props.data)) {
            TableContent = this.props.data.map((rowData, index) =>
            (
                <styles.TableRow key={index} colour={this.state.accent}>
                    <styles.TableText>{this.formatDueDate(rowData.date)}</styles.TableText>
                    <styles.TableText>{rowData.action.replace(/\b\w/g, l => l.toUpperCase())}</styles.TableText>
                    <styles.TableText><styles.TableLink to={'/users?id=' + rowData.id}>{rowData.user}</styles.TableLink></styles.TableText>
                    <styles.TableText>{rowData.id}</styles.TableText>
                </styles.TableRow>
            )
        )
        }


        return ([
            (this.formatDueDate(this.props.dueDate)) ? <styles.DueDateTitle key={0}>Due Date: {this.formatDueDate(this.props.dueDate)}</styles.DueDateTitle> : null,
            <styles.Table key={1}>
                <styles.TableHeader colour={this.state.accent}>
                    <styles.TableHeading colour={this.state.accent}>Date</styles.TableHeading>
                    <styles.TableHeading colour={this.state.accent}>Action</styles.TableHeading>
                    <styles.TableHeading colour={this.state.accent}>User</styles.TableHeading>
                    <styles.TableHeading colour={this.state.accent}>ID</styles.TableHeading>
                </styles.TableHeader>


                {TableContent}

            </styles.Table>
        ]);
    }
}

export default BookHistoryTable;
