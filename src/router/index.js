import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import {
  Scene,
  Router,
  Modal,
  Tabs,
  Lightbox,
  ActionConst,
  Actions,
} from 'react-native-router-flux'

import Login from '../screens/login'
import Home from '../screens/home'
import NewTask from '../screens/new-task'
import TaskView from '../screens/task-view'
import LoginWithEmail from '../screens/login-with-email'
import Profile from '../screens/profile'

import CircleButton from '../components/circle-button'
import { logo } from '../libs/images'
import routerKeys from './keys'

import styles from './styles'

import withStore from './store'

const {
  MAIN_TABS,
  LOGIN_SCREEN,
  HOME_SCREEN,
  SCHEDULE_SCREEN,
  ADD_SCREEN,
  NOTIFICATIONS_SCREEN,
  PROFILE_SCREEN,
  NEW_TASK_LIGHTBOX,
  TASK_DETAIL,
  LOGIN_LIGHTBOX,
} = routerKeys

class Navigation extends Component {
  componentDidMount() {
    const { isAuthenticated } = this.props
    Actions[isAuthenticated ? HOME_SCREEN : LOGIN_SCREEN].call({ type: 'reset' })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
      Actions[this.props.isAuthenticated ? HOME_SCREEN : LOGIN_SCREEN].call({ type: 'reset' })
    }
  }
  onAddButtonPress = () => {
    Actions[NEW_TASK_LIGHTBOX].call()
  }
  render() {
    return (
      <Router sceneStyle={styles.scene}>
        <Lightbox>
          <Modal>
            <Scene key="root" hideNavBar>
              <Scene key={MAIN_TABS} hideNavBar type={ActionConst.REPLACE}>
                <Tabs
                  showLabel={false}
                  swipeEnabled
                  inactiveTintColor={styles.inactiveTintColor}
                  activeTintColor={styles.activeTintColor}
                  tabBarStyle={styles.tabBarStyle}
                  navigationBarStyle={styles.navigationBarStyle}
                  navigationBarTitleImage={logo}
                  navigationBarTitleImageStyle={styles.navigationBarTitleImageStyle}
                  headerLayoutPreset="center"
                >
                  <Scene
                    key={HOME_SCREEN}
                    component={Home}
                    icon={({ tintColor }) => <Icon name="list" size={24} color={tintColor} />}
                  />
                  <Scene
                    key={SCHEDULE_SCREEN}
                    component={Home}
                    icon={({ tintColor }) => <Icon name="clock" size={24} color={tintColor} />}
                  />
                  <Scene
                    key={ADD_SCREEN}
                    component={Home}
                    tabBarOnPress={() => null}
                    icon={() => (
                      <CircleButton
                        elevation
                        customStyles={styles.addButton}
                        iconName="plus"
                        onPress={this.onAddButtonPress}
                      />
                    )}
                  />
                  <Scene
                    key={NOTIFICATIONS_SCREEN}
                    component={Home}
                    icon={({ tintColor }) => <Icon name="bell" size={24} color={tintColor} />}
                  />
                  <Scene
                    key={PROFILE_SCREEN}
                    component={Profile}
                    icon={({ tintColor }) => <Icon name="user" size={24} color={tintColor} />}
                  />
                </Tabs>
              </Scene>
            </Scene>

            {/* MODALS */}
            <Scene
              key={LOGIN_SCREEN}
              title="Login"
              component={Login}
              type={ActionConst.REPLACE}
              hideNavBar
            />
            {/* // MODALS */}
          </Modal>

          {/* LIGHTBOXES */}
          <Scene key={NEW_TASK_LIGHTBOX} component={NewTask} />
          <Scene key={TASK_DETAIL} component={TaskView} />
          <Scene key={LOGIN_LIGHTBOX} component={LoginWithEmail} />
          {/* // LIGHTBOXES */}
        </Lightbox>
      </Router>
    )
  }
}

export default withStore(Navigation)
