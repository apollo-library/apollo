//React imports
import React, { Component } from 'react';

import * as styles from './contentTabsStyles.js'

class ContentTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: this.props.tabs
        };
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.tabs !== nextProps.tabs) {
            //console.log(nextProps.tabs)
            return {
                tabs: nextProps.tabs
            }
        }
        return null;
    }


    changeActiveTab(tab) {
        let tabIndex = this.state.tabs.indexOf(tab);
        let updatedTabs = this.state.tabs;

        for (let i = 0; i < updatedTabs.length; i++) {
            updatedTabs[i].active = false;
        }

        updatedTabs[tabIndex].active = true;
        this.setState({tabs: updatedTabs});
    }

    render() {
        let componentToShow;
        for (let i = 0; i < this.state.tabs.length; i++) {
            if (this.state.tabs[i].active === true) {
                componentToShow = this.state.tabs[i].componentToShow
            }
        }

        return (
            <div>
                <styles.ConentTabs>
                    {this.state.tabs.map((tab, index) =>
                        (
                            <div key={index}>
                                <styles.ContentTab
                                    itemActive={tab.active}
                                    colour={tab.colour}
                                    onClick={() => this.changeActiveTab(tab)}
                                >
                                    {tab.title}
                                </styles.ContentTab>
                            </div>
                        )
                    )}
                </styles.ConentTabs>

                <styles.ContentTabContent>
                    {componentToShow}
                </styles.ContentTabContent>
            </div>
        );
    }
}

export default ContentTabs;
