import React from 'react'
import ReactDom from 'react-dom'
import { Fragment } from 'react'
import './index.css'
import Header from './Components/Header/header.js'
import Footer from './Components/Footer/footer.js'
import Search from './Components/Search/search.js'
import ContactList from './Components/Contact-list/contact-list.js'


class App extends React.Component {
    render () {
        return (
            <Fragment>
                <div className='container'>
                    <Header />
                    <Search />
                    <ContactList />
                    <Footer />
                </div>
            </Fragment>
        )
    }
}


ReactDom.render(<App></App>, document.getElementById('root'))