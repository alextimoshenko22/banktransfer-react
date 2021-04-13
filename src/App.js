//UI уровень
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import 'antd/dist/antd.css'
import "./App.css"
import CardsContainer from './components/Transfer/CardsContainer'
import HistoryTableContainer from './components/Transfer/HistoryTableContainer'
import { Layout } from 'antd'
import { NavLink } from "react-router-dom"

const { Header, Content, Footer } = Layout

class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ color: '#40a9ff', fontSize: '2em' }}>
          <NavLink to="/cards">Cards</NavLink>
          <span>    |   </span>
          <NavLink to="/history">History</NavLink>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Switch>
              <Redirect exact from="/" to="/transfer" />
              <Route path="/cards" render={() => <CardsContainer />} />
              <Route path="/history" render={() => <HistoryTableContainer />} />
              <Route path="*" render={() => <div>404 NOT FOUND</div>} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Bank Transfer ©2021 Created by Alex Timoshenko</Footer>
      </Layout>
    )
  }
}

export default App