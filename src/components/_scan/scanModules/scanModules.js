//React imports
import React, { Component } from 'react';

//Component imports
import {ContentTabs, Searchbar, ReturnRenew, Withdraw, Error, Success} from './../..';

import {CenterColumn, RightColumn, BottomLogo} from './../../../globalStyles.js'

import logo from './../../../assets/images/logo.svg'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    scanStatesToShow: state.ui.scanStatesToShow
})

class ScanModules extends Component {
    render() {
		let tabReturns = [
			{
				title: "Scan",
				componentToShow: <Searchbar />,
                colour: "primary",
				active: true
			},
			{
				title: "Withdraw",
				componentToShow: <Withdraw />,
				colour: "accent2",
				active: false
			},
            {
				title: "Return / Renew",
				componentToShow: <ReturnRenew />,
                colour: "accent5",
				active: false
			},
            {
				title: "Thank You",
				componentToShow: <Success />,
                colour: "accent5",
				active: false
			},
            {
				title: "Error", //Error
				componentToShow: <Error />,
                colour: "accent6",
				active: false
			}
		];

        return (
            <CenterColumn>
                <RightColumn style={{flex: 1}}>
                    <ContentTabs tabs={
                        this.props.scanStatesToShow.map((tab, index) => {
                            if (index === this.props.scanStatesToShow.length - 1) {
                                tabReturns[tab].active = true;
                            } else {
                                tabReturns[tab].active = false;
                            }

                            if (tab < tabReturns.length) return tabReturns[tab]
                            else console.log("Scan tab does not exist")

                            return null;
                        })
                    } />
                    <BottomLogo src={logo} />
                </RightColumn>
            </CenterColumn>
        );
    }
}

export default connect(mapStateToProps)(ScanModules);
