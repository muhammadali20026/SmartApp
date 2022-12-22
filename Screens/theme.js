import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDispatch } from 'react-redux'


import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Theme = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {

    localStorage.setItem('theme', theme)
  }, [ theme ])

  const handleChange = () => {
    const next = theme === 'dak' ? 'light' : 'dark'
    dispatch(set(next))
  }

  return (
    <View>
      <TouchableOpacity>
    		<Text>eegdssd</Text>
      onClick={handleChange}
     
    </TouchableOpacity>
    </View>
  )
}

export default Theme