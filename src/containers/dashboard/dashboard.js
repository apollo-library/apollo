//React imports
import React, { Component } from 'react';

//Component imports
import {AccentedBox, ContentTabs, Fines} from './../../components';

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
                        <PageTitle>Dashboard</PageTitle>
                        <AccentedBox
                            title="Generate Report"
                            gradFrom="accent5"
                            gradTo="accent4"
                            data={ {
                                title: 'Create Loan Report',
                                subtitle: 'Report of all books on loan',
                                url: '/report/loans',
                                buttonText: 'Generate'
                            } }

                            type="custom"
                        />
                        <AccentedBox
                            title="Generate Report"
                            gradFrom="accent2"
                            gradTo="accent1"
                            data={ {
                                title: 'Create Overdue Loan Report',
                                subtitle: 'Report of all overdue books',
                                url: '/report/overdue',
                                buttonText: 'Generate'
                            } }

                            type="custom"
                        />
                    </LeftColumn>

                    <RightColumn>
                        <ContentTabs
                            tabs={[
                                {
                                    title: "Fines",
                                    componentToShow: <Fines colour="accent3"/>,
                                    colour: "accent3",
                                    active: true
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


/*
Old dashboard elements:

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

*/
