import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getKinds, getTypes } from '../../store/codex'
import styled from 'styled-components'
import Button from '../Button.js'

export default () => {
  const dispatch = useDispatch()
  const kinds = useSelector(getKinds)
  const types = useSelector(getTypes)

  return(
    <Box>
      <h2 className="title">Overview</h2>
      <p className="description">
        Learn more details about the differents kinds and types, and get units filtered by kind or type.
      </p>
      <div className="pannel">
        <div className="tab">
          <h3>Kinds</h3>
          { ((options = []) => {
            for (let key in kinds) {
              options.push(
                <div className="tabCard" key={key}>
                  <div className="tabCardContent">
                    <img src="" alt="box-image" />
                    <div>
                      <h4>{ key }</h4>
                      <p>{ kinds[key].description }</p>
                    </div>
                    
                  </div>
                  <Button value="See" colored={ true } size="small" />
                </div>
              )
            }
            return options
          })() }
        </div>
        <div className="tab">
          <h3>Types</h3>
          { ((options = []) => {
            for (let key in types) {
              options.push(
                <div className="tabCard" key={key}>
                  <div className="tabCardContent">
                    <img src="" alt="box-image" />
                    <div>
                      <h4>{ key }</h4>
                      <p>{ types[key].description }</p>
                    </div>
                    
                  </div>
                  <Button value="See" colored={ true } size="small" />
                </div>
              )
            }
            return options
          })() }
        </div>
      </div>
    </Box>
  )
}

const Box = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  background-color: rgba(255, 255, 255, 0.65);

  .title {
    margin: 10px 0;
  }

  .description {
    text-align: center;
    font-size: 18px;
    margin: 10px 10%;
  }

  .pannel {
    width: 100%;
    display: flex;
    justify-content: center;

    .tab {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .tabCard {
        margin-top: 15px;
        width: 85%;
        padding: 10px;
        display:flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.65);

        .tabCardContent {
          display: flex;
          align-items: center;

          img {
            display: none;
            width: 30%;
            height: auto;
            flex-shrink: 0;
          }

          div {
            padding: 5px;

            h4 {
              text-align: center;
              margin-bottom: 20px;
            }

            p {
              text-align: center;
              font-size: 15px;
            }
          }
        }
      }

      @media(min-width: 565px) {

        &:first-child {
          border-right: 1px solid grey;
        }

        &:last-child {
          border-left: 1px solid grey;
        }

        .tabCard {

          .tabCardContent {

            img {

            }

            div {

              h4 {

              }

              p {

              }
            }
          }
        }
      }

      @media(min-width: 1024px) {

        .tabCard {

          .tabCardContent {

            img {
              display: block;
            }

            div {

              h4 {

              }

              p {

              }
            }
          }
        }
      }
    }
  }
`