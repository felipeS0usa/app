import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import BottomNavigation, {
  IconTab,
  Badge
} from 'react-native-material-bottom-navigation'

import Icon from '@expo/vector-icons/MaterialCommunityIcons'


export default class App extends React.Component {
    state = {
        activeTab: 'alertas'
    }

    tabs = [
        {
            key: 'alertas',
            label: 'Alertas',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'alert'
        },
        {
            key: 'manejos',
            label: 'Manejos',
            barColor: '#00695C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'receipt'
        },
        {
            key: 'Apiários',
            label: 'apiarios',
            barColor: '#6A1B9A',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'archive'
        },
        {
            key: 'colmeias',
            label: 'Colmeias',
            barColor: '#1565C0',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'nature'
        }
    ]

    state = {
        activeTab: this.tabs[0].key
    }

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <IconTab
            isActive={isActive}
            showBadge={tab.key === 'alertas'}
            renderBadge={() => <Badge>2</Badge>}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.view}>
              
              </View>
              <BottomNavigation
                  tabs={this.tabs}
                  activeTab={this.state.activeTab}
                  onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                  renderTab={this.renderTab}
                  useLayoutAnimation
              />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white' 
    },
    view: {
        flex: 1, justifyContent: 'flex-end' 
    },
});