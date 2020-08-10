import React,{Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import './meta.css';

class ss extends Component {
    render() {
      return(
      <React.Fragment>
        
       <Jumbotron className="container meta1">
              <div>
                <h1> Meta Weather API</h1>
                <p>MetaWeather provides an API that delivers JSON over HTTPS for access to our data.</p>
                <p><a href="#">Drop me an email</a> if you're going to make more than maybe a request a minute to this.
                    We also ask that you link back to <a href="#">MetaWeather.com</a> where appropriate, 
                    in a sensible way that's useful to the user.</p>
              </div>
        </Jumbotron>
        <Jumbotron className="container tab1">
        <Table class="table1">
            <p><b>Weather States</b></p>
            <tr>
                <th >Name</th>
                <th>Abbreviation</th>
                <th>Icon</th>
            </tr>
            <tr>
                <td>Sleet</td>
                <td>sl</td>
                <td class="img"><Image src="https://www.metaweather.com/static/img/weather/sn.svg"/></td>
            </tr>
            <tr>
                <td>Hail</td>
                <td>h</td>
                <td class="img"><Image src="https://www.metaweather.com/static/img/weather/sl.svg" /></td>
            </tr>
            <tr>
                <td>Thunderstorm</td>
                <td>t</td>
                <td  class="img"><Image src="https://www.metaweather.com/static/img/weather/h.svg"></Image></td>
            </tr>
            <tr>
                <td>Heavy Rain</td>
                <td>hr</td>
                <td  class="img"><Image src="https://www.metaweather.com/static/img/weather/t.svg"></Image></td>
            </tr>
            <tr>
                <td>Light Rain</td>
                <td>lr</td>
                <td  class="img"><Image src="https://www.metaweather.com/static/img/weather/hr.svg"></Image></td>
            </tr>
            <tr>
                <td>Showers</td>
                <td>s</td>
                <td  class="img"><Image src="https://www.metaweather.com/static/img/weather/s.svg"></Image></td>
            </tr>
            <tr>
                <td>Heavy Cloud</td>
                <td>hc</td>
                <td  class="img"><Image src="https://www.metaweather.com/static/img/weather/hc.svg"></Image></td>
            </tr>
            <tr>
                <td>Light Cloud</td>
                <td>lc</td>
                <td  class="img"><Image src="https://www.metaweather.com/static/img/weather/lc.svg"></Image></td>
            </tr>
            <tr>
                <td>Clear</td>
                <td>c</td>
                <td   class="img"><Image src="https://www.metaweather.com/static/img/weather/c.svg"></Image></td>
            </tr>
            

        </Table>
        </Jumbotron>
        <Jumbotron className=" container meta2">
            <h3>Icons</h3>
            <p>Feel free to hotlink these images. Replace "X" in the table below with the weather state
                 abbreviation.</p>
        </Jumbotron>
        <Jumbotron className="container tab2">
        <Table class="table2">
            <tr>
                <th >Type</th>
                <th>URL</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>SVG (preferred)</td>
                <td>/static/img/weather/X.svg</td>
                <td></td>
            </tr>
            <tr>
                <td>ICO</td>
                <td>/static/img/weather/ico/X.ico</td>
                <td></td>
            </tr>
            <tr>
                <td>PNG (600x600 px)</td>
                <td>/static/img/weather/png/X.png</td>
                <td></td>
            </tr>
            <tr>
                <td>PNG (64x64 px)</td>
                <td>/static/img/weather/png/64/X.png</td>
                <td></td>
            </tr>
        </Table>
        </Jumbotron>
        <Jumbotron className="container meta3">
            <h2>Methods</h2>
            <p><a href="#">Location Search</a></p>
            <p>Find a location</p>
            <p><a href="#">Location</a></p>
            <p>Location information, and a 5 day forecast</p>
            <p><a href="#">Location Day</a></p>
            <p>Source information and forecast history for a particular day & location</p>
        </Jumbotron>
        <Jumbotron className="container meta4">
            <h4>Location Search</h4>
            <h4>URL</h4>
            <a href="#">/api/location/search/?query=(query)  /api/location/search/?lattlong=(latt),(long)</a>
            <h5>Arguments</h5>
            <p>Either query or lattlong need to be present.</p>
            <h5>query</h5>
            <p>Text to search for.</p>
            <h5>lattlong</h5>
            <p>Coordinates to search for locations near. Comma separated lattitude and longitude e.g.
                 "36.96,-122.0"</p>
            <h5>Examples</h5>
            <a href="#">/api/location/search/?query=san </a>
            <a href="#">/api/location/search/?query=london</a>
            <a href="#">/api/location/search/?lattlong=36.96,-122.02</a>
            <a href="#">/api/location/search/?lattlong=50.068,-5.316</a>
            <h4>Response Fields</h4>
        </Jumbotron>
        <Jumbotron className="container tab3">
        <Table class="table3">
            <tr>
                <th >Field</th>
                <th>Type</th>
                <th>Unit</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>title</td>
                <td>string</td>
                <td></td>
                <td>Name of the location</td>
            </tr>
            <tr>
                <td>location_type</td>
                <td>string</td>
                <td>(City|Region / State / Province|Country|Continent)</td>
                <td></td>
                
            </tr>
            <tr>
                <td>latt_long</td>
                <td>floats, comma separated</td>
                <td></td> 
                <td></td>
            </tr>
            <tr>
                <td>woeid</td>
                <td></td>
                <td>integer</td>
                <td>Where On Earth ID</td>
            </tr>
            <tr>
                <td>distance</td>
                <td>integer</td>
                <td>Metres</td>
                <td>Only returned on a lattlong search</td>
            </tr>
        </Table>
        </Jumbotron>
        <Jumbotron className="container meta5">
            <h4>Location </h4>
            <h4>URL</h4>
            <a href="#">/api/location/(woeid)/(date)/</a>
            <h5>Arguments</h5>
            <h5>woeid</h5>
            <p>Where On Earth ID. <a href="#">Docs</a></p>
            
            <h5>Examples</h5>
            <p><a href="#">/api/location/44418/2013/4/27/ </a>- London on a 27th Apr 2013</p>
            <p><a href="#">/api/location/2487956/2013/4/30/</a> - San Francisco on 30th April 2013</p>
            
        </Jumbotron>
        <Jumbotron className="container tab4">
        <Table class="table4">
            <tr>
                <th >Field</th>
                <th>Type</th>
                <th>Unit</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>title</td>
                <td>string</td>
                <td></td>
                <td>Name of the Location</td>
            </tr>
            <tr>
                <td>location_type</td>
                <td>string</td>
                <td>(City|Region / State / Province|Country|Continent)</td>
                <td></td>
            </tr>
            <tr>
                <td>latt_long</td>
                <td>floats, comma separated</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>time</td>
                <td>datetime</td>
                <td></td>
                <td>Time in location</td>
            </tr>
            <tr>
                <td>sun_(rise|set)</td>
                <td>datetime</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>timezone_name)</td>
                <td>string</td>
                <td></td>
                <td>Name of the timezone that the location is in</td>
            </tr>
            <tr id="pa">
                <td >parent</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>title </td>
                <td>string</td>
                <td></td>
                <td>Name of the parent location</td>
            </tr>
            <tr>
                <td>location_type</td>
                <td>string</td>
                <td>(City|Region / State / Province|Country|Continent)</td>
                <td></td>
            </tr>
            <tr>
                <td>latt</td>
                <td>floats, comma separated</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>woeid</td>
                <td>integer</td>
                <td></td>
                <td></td>
            </tr>
            <tr id="co">
                <td>consolidated_weather</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>id</td>
                <td>integer</td>
                <td></td>
                <td>Internal identifier for the forecast</td>
            </tr>
            <tr>
                
                <td>applicable_date</td>
                <td>string</td>
                <td></td>
                <td>Date that the forecast or observation pertains to</td>
            </tr>
            <tr>
                
                <td>weather_state_name</td>
                <td>date</td>
                <td></td>
                <td>Text description of the weather state</td>
            </tr>
            <tr>
                
                <td>weather_state_abbr</td>
                <td>string</td>
                <td></td>

                <td>One or two letter abbreviation of the weather state</td>
            </tr>
            <tr>
                <td>wind_speed</td>
                <td>float</td>
                <td>mph</td>
                <td></td>
            </tr>
            <tr>
                <td>wind_direction</td>
                <td>float</td>
                <td>degrees</td>
                <td></td>
            </tr>
            <tr>
                <td>wind_direction_compass</td>
                <td>string</td>
                <td>compass point</td>
                <td>Compass point of the wind direction</td>
            </tr>

            <tr>
                <td>air_pressure</td>
                <td>float</td>
                <td>mbar</td>
                <td></td>
            </tr>
            <tr>
                <td>visibility</td>
                <td>float</td>
                <td>miles</td>
                <td></td>
            </tr>
            <tr>
                <td>predictability</td>
                <td>integer</td>
                <td>percentage</td>
                <td>Our interpretation of the level to which the forecasters agree with each other - 100% being a complete consensus.</td>
            </tr>
            <tr  id="so">
                <td >sources</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>title</td>
                <td>string</td>
                <td></td>
                <td>Name of the source</td>
            </tr>
            <tr>
                <td>url</td>
                <td>string</td>
                <td></td>
                <td>url of the source</td>
            </tr>
        </Table>
        </Jumbotron>
        <Jumbotron className="container meta6">
            <h4>Location Day</h4>
            <h4>URL</h4>
            <a href="#" id="a1">/api/location/(woeid)/(date)/</a>
            <h5>Arguments</h5>
            <h5>woeid</h5>
            <p>Where On Earth ID. <a href="#">Docs</a></p>
            <h5>date</h5>
            <p>Date in the format yyyy/mm/dd. Most location have data from early 2013 to 5-10 days in the future.</p>
            <h5>Examples</h5>
            <p><a href="#"id="a2">/api/location/44418/2013/4/27/ </a>- London on a 27th Apr 2013</p>
            <p><a href="#" id="a3">/api/location/2487956/2013/4/30/</a> - San Francisco on 30th April 2013</p>
            <h5>Response Fields</h5>
            <p>Returns a date ordered list of fields as described in the consolidated_weather section of the location method</p>
        </Jumbotron>
       </React.Fragment>
      );
      }
    }
export default ss;