import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { setKinds, getKinds } from '../../store/codex'
import { setTypes, getTypes } from '../../store/codex'

const FilterBar = (props) => {
  const dispatch = useDispatch()
  const api = useSelector(state => state.app.axiosInstance)

  const kinds = useSelector(getKinds)
  const types = useSelector(getTypes)

  const [tags, setTags] = useState(false)
  const [body, setBody] = useState(new Object())
  const [searchKeywords, setSearchKeywords] = useState('')

  useEffect(() => {
    if (!kinds) {
      api.get('api/kinds')
        .then(response => dispatch(setKinds(response.data)))
        .catch(error => { throw error })
    }
    if (!types) {
      api.get("api/types")
        .then(response => dispatch(setTypes(response.data)))
        .catch(error => { throw error })
    }
  }, [])

  const onChange = event => {
    let value = event.target.value 

    if (value.length > 0) body.keywords = value
    else if (undefined != body.keywords) delete body.keywords

    setSearchKeywords(body.keywords? body.keywords : '')
    setBody(body)
    refreshTags()
  }

  const onSelectChange = event => {
    let filter = event.target.getAttribute('filter'),
        value = event.target.value

    if (!body[filter]) body[filter] = new Object()

    if (1 == value) body[filter] = new Object()
    else if (body[filter][value]) delete body[filter][value]
    else body[filter][value] = true

    event.target.value = '0'
    setBody(body)
    refreshTags()
  }

  const removeFilter = event => {
    let filter = event.currentTarget.getAttribute('filter')
    let value = event.currentTarget.getAttribute('value')

    if (filter === 'keywords') {
      let regExp = new RegExp(`, ${value}` + '|' + `${value}, ` + '|' + `${value}`)

      body.keywords = getKeywords(body.keywords).join(', ').replace(regExp, '')
      setSearchKeywords(body.keywords)
    }
    else delete body[filter][value]

    setBody(body)
    refreshTags()
  }

  const refreshTags = () => {
    let tags = false

    for (let filter in body) {
      if ('keywords' === filter) continue

      for (let value in body[filter]) {
        if (!tags) tags = new Array()
        tags.push(<p className="tag" key={ value }>{ value } <span filter={ filter } value={ value } onClick={ removeFilter }>X</span></p>)
      }
    }

    if (body.keywords) {
      let keywords = getKeywords(body.keywords)
      
      keywords.map((keyword, i) => {
        if (!tags) tags = new Array()

        if (keyword.length > 0) {
          tags.push(
            <p className="tag" key={ `keyword${i}` }>
              { keyword } <span filter="keywords" value={ keyword } onClick={ removeFilter }>X</span>
            </p>
          )
        }
      })
    }

    setTags(tags)
  }

  const getKeywords = keywords => {
    let selectors = keywords.match(/, |,/g)

    if (selectors && selectors.find(selector => selector === ', ')) keywords = keywords.replace(/ /g, '')

    return (keywords.match(','))? keywords.split(',') : keywords.split(' ')
  }

  return (
    <FilterBarDiv>
      <h2 className="title">Codex</h2>
      <p className="description">Welcome in our codex section, where you can learn more about our game, search different units with thoses filters or navigate through the codex with the differents sections below.</p>
      <ResearchBar type="text" onChange={ onChange } value={ searchKeywords } placeholder={ 'Filter units by keywords' }/>
      <SelectBar>
        <SelectFilter filter="kinds" onChange={ onSelectChange }>
          <option value={ 0 } defaultValue style={ { display: "none" } }>Kinds</option>
          <option value={ 1 }>None</option>
          {kinds && ((kindOptions = []) => {
            for (let key in kinds) kindOptions.push(<option key={ key } value={ key }>{ key }</option>)
            return kindOptions
          })()}
        </SelectFilter>
        <SelectFilter filter="types" onChange={ onSelectChange }>
          <option value={ 0 } defaultValue style={ { display: "none" } }>Types</option>
          <option value={ 1 }>None</option>
          {types && ((typeOptions = []) => {
            for (let key in types) typeOptions.push(<option key={ key } value={ key }>{ key }</option>)
            return typeOptions
          })()}
        </SelectFilter>
        <div className="reset">
          <div>
            Reset
          </div>
        </div>
      </SelectBar>
      <TagSection>
        { tags && tags }
      </TagSection>
    </FilterBarDiv>
  )
}

const FilterBarDiv = styled.div`
  width: 80%;
  max-width: 1200px;
  min-height: 250px;
  margin: auto;
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.65);

  .title {
    margin: 10px 0;
  }

  .description {
    text-align: center;
    font-size: 18px;
    margin: 10px 10%;
  }
`

const ResearchBar = styled.input`
  padding: 0 7px;
  margin: 10px 0;
  width: 90%;
  height: 30px;
`

const SelectBar = styled.div`
  width: 90%; 
  display: flex;
  align-items: center;
  margin: 10px 0;

  .reset {
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

const SelectFilter = styled.select`
  height: 30px;
  width: 220px;
  flex-shrink: 0;
  margin-right: 20px;
`

const TagSection = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 2px;
  flex-wrap: wrap;
  box-sizing: border-box;

  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
    padding: 1px 7px;
    border: 1px solid purple;
    box-sizing: border-box;

    span {
      color: red;
      margin-bottom: -1px;
      cursor: pointer;
    }
  }
`

export default FilterBar