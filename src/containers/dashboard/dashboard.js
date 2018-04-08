//React imports
import React, { Component } from 'react';

//Component imports
import {AccentedBox, ContentTabs, DueSoon, Recommended, History} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, BottomLogo, PageTitle} from './../../globalStyles.js'

import logo from './../../assets/images/logo.svg'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    studentDetails: state.data.studentDetails
})


class Dashboard extends Component {
    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn>
                        <PageTitle>{this.props.studentDetails.concatName + "'s Dashboard"}</PageTitle>
                        <AccentedBox
                            title="Latest Book"
                            gradFrom="accent5"
                            gradTo="accent4"

                            type="latestBook"
                        />
                        <AccentedBox
                            title="Fines"
                            gradFrom="accent2"
                            gradTo="accent1"

                            type="fines"
                        />
                        <AccentedBox
                            title="Rate"
                            gradFrom="accent3"
                            gradTo="accent4"

                            type="rate"
                        />
                    </LeftColumn>

                    <RightColumn>
                        <ContentTabs
                            data={this.props.studentDetails}
                            tabs={[
                                {
                                    title: "Due Soon",
                                    componentToShow: <DueSoon colour="accent3"/>,
                                    colour: "accent3",
                                    active: true
                                },
                                {
                                    title: "Recommended",
                                    componentToShow: <Recommended colour="accent2"/>,
                                    colour: "accent2",
                                    active: false
                                },
                                {
                                    title: "History",
                                    componentToShow: <History colour="accent1"/>,
                                    colour: "accent1",
                                    active: false
                                }
                            ]}
                         />

                        <BottomLogo src={logo} />
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);
