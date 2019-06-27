//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './../../bookTable/bookTableStyles.js'
import * as reportStyles from './reportTableStyles.js'

class ReportTable extends Component {
    constructor() {
        super()

        this.state = {
            accent: 'accent3'
        };
    }

    render = () => {
        //Render nothing if no data was passed into the table
        if (!this.props.body || !this.props.header) return null;

        return (
            <styles.Table>
                <styles.TableHeader colour={this.state.accent}>
                    {this.props.header.map((item, index) => (
                        <styles.TableHeading key={index} colour={this.state.accent}>{item}</styles.TableHeading>
                    ))}
                </styles.TableHeader>

                {this.props.body.map((item, index) => (
                    <styles.TableRow key={index} colour={this.state.accent}>
                        {
                            item.map((cell, index) => {
                                if (cell.url) return (
                                    <reportStyles.Cell cellStyle={cell.style} key={index}>
                                        <reportStyles.TableLink to={cell.url}>
                                            {cell.display}
                                        </reportStyles.TableLink>
                                    </reportStyles.Cell>
                                )
                                else return (
                                    <reportStyles.Cell cellStyle={cell.style} key={index}>
                                        {cell.display}
                                    </reportStyles.Cell>
                                )
                            })
                        }
                    </styles.TableRow>
                ))}
            </styles.Table>
        )
    }
}

export default ReportTable;
