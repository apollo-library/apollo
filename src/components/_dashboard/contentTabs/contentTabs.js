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
        return (
            <styles.ConentTabs>

                {this.state.tabs.map((tab, index) =>
                    (
                        <styles.ContentTab
                            key={index}
                            itemActive={tab.active}
                            colour={tab.colour}
                            onClick={() => this.changeActiveTab(tab)}
                        >
                            {tab.title}
                        </styles.ContentTab>
                    )
                )}
            </styles.ConentTabs>
        );
    }
}

export default ContentTabs;
