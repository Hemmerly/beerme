import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {fetchBeers} from '../store/beer'
import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryScatter,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis
} from 'victory'
const _ = require('lodash')

class Beers extends React.Component {
  componentDidMount() {
    this.props.fetchInitialBeers()
  }

  render() {
    const beers = Array.from(this.props.beers)
    const allratings = beers.map(rating => rating.rating_score)
    const ratingGroupings = _.countBy(allratings),
      ratingGroups = Object.keys(ratingGroupings).map(k => ({
        x: k,
        y: ratingGroupings[k]
      }))
    const styleNames = beers.map(beer => {
      let name
      let curBeer = beer.beer_type
      for (let i = 0; i < curBeer.length; i++) {
        if (curBeer[i] + curBeer[i + 1] === ' -') break
        name += curBeer[i]
      }
      return name.slice(9)
    })
    const uniqueStyles = [...new Set(styleNames)]
    const stylesPie = uniqueStyles.map(style => {
      let count = 0
      for (let i = 0; i < styleNames.length; i++) {
        if (styleNames[i] === style) count++
      }
      return {x: style, y: count}
    })

    return (
      <div>
        <div id='firstBar'>
        <h1>Victory Samples</h1>

        <h2>Beers per Rating</h2>
        <VictoryChart animate={{duration: 2000, easing: 'bounce'}
        }
        >
        <VictoryAxis 
        label='Ratings'
        style={{
          ticks: {stroke: "grey", size: 5},
          tickLabels: {fontSize: 5, padding: 5}
        }}/>
        <VictoryAxis dependentAxis />
          <VictoryBar
            horizontal
            categories={{
              x: [
                'null',
                '0.25',
                '0.5',
                '0.75',
                '1',
                '1.25',
                '1.5',
                '1.75',
                '2',
                '2.25',
                '2.5',
                '2.75',
                '3',
                '3.25',
                '3.5',
                '3.75',
                '4',
                '4.25',
                '4.5',
                '4.75',
                '5'
              ]
            }}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onClick: () => {
                    return [
                      {
                        target: 'data',
                        mutation: props => {
                          const fill = props.style && props.style.fill
                          return fill === 'blue'
                            ? null
                            : {style: {fill: 'blue'}}
                        }
                      },
                      {
                        target: 'labels',
                        mutation: props => {
                          const fill = props.style && props.style.fill
                          return fill === 'black'
                            ? null
                            : {style: {fill: 'black', fontSize:8}}
                        }
                      }
                    ]
                  }
                }
              }
            ]}
            data={ratingGroups}
            labels={d => d.y}
            style={{
              data: {fill: "tomato", opacity: 0.7},
              labels: {fontSize: 8, opacity:0, fill: 'white'},
              parent: {border: "1px solid #ccc"}
            }}
            labelComponent={<VictoryLabel verticalAnchor="end"/>}
          />
        </VictoryChart>
        </div>

        <h2>Beers per Type</h2>
        <VictoryChart animate={{duration: 2000, onEnter: {duration: 500, before: () => ({y: 0})}}}>
          <VictoryAxis 
                   style={{
          ticks: {stroke: "grey", size: 5},
          tickLabels: {fontSize: 5, padding: 10, angle: 90, verticalAnchor: 'start'},
        }}/>
          <VictoryAxis dependentAxis label='Number of Beers'/>
          <VictoryBar 
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
          events={[
              {
                target: 'data',
                eventHandlers: {
                  onClick: () => {
                    return [
                      {
                        target: 'data',
                        mutation: props => {
                          const fill = props.style && props.style.fill
                          return fill === 'blue'
                            ? null
                            : {style: {fill: 'blue'}}
                        }
                      },
                      {
                        target: 'labels',
                        mutation: props => {
                          const fill = props.style && props.style.fill
                          return fill === 'black'
                            ? null
                            : {style: {fill: 'black', fontSize:8}}
                        }
                      }
                    ]
                  }
                }
              }
            ]}
          data={stylesPie}
          labels={d => `${d.y} ${d.x}s`}
          style={{
            labels: {fontSize: 0, opacity:0}
          }}
          labelComponent={<VictoryLabel verticalAnchor="end"/>} />
        </VictoryChart>


        <h2>Beers per type</h2>
        <VictoryPie 
        width={200}
        height={200}
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: 'data',
                    mutation: props => {
                      const fill = props.style && props.style.fill
                      return fill === 'green'
                        ? null
                        : {style: {fill: 'green'}}
                    }
                  },
                  {
                    target: 'labels',
                    mutation: props => {
                      const fill = props.style && props.style.fill
                      return fill === 'black'
                        ? null
                        : {style: {fill: 'black', fontSize:5}}
                    }
                  }
                ]
              }
            }
          }
        ]}data={stylesPie} x="x" y="y" 
        labels={d => `${d.y} ${d.x}s`}
        style={{
          labels: {fontSize: 0, opacity:0}
        }}/>

      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  fetchInitialBeers: () => dispatch(fetchBeers())
})

const mapState = state => {
  return {
    beers: state.beer
  }
}

export default withRouter(connect(mapState, mapDispatch)(Beers))
