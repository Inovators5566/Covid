
/*
mport React from 'react';


import { Cards,Chart , CountryPicker } from './components';


import styles from './App.module.css';
import { fetchData } from './api/';
class App extends React.Component {
state = {
    data :{},
}
async componentDidMount () {
        const fetcheddata = await fetchData();
        this.setState({ data : fetcheddata})
       
    
      
    
}
    render() {
        const { data }= this.state;
        return(
            <div className={styles.container}> 
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;
*/

import React from 'react';

import Simplemenu from './components/menu';
  import { Cards, CountryPicker, Chart} from './components';
 

import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {


  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
   
  
       const { data, country } = this.state;
     
    return (
      <div className={styles.container}>
         
         <Simplemenu />
        <img className={styles.image} src={image} alt="COVID-19" style={{width: 400, height: 200, position: 'relative', top: this.props.bottom, left: this.props.left}} />
      
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <b id ="k">SELECT BOTH OR ONE </b>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;