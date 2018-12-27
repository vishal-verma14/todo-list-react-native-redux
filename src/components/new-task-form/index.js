import React from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native'

import InputText from '../input-text'
import Picker from '../picker'
import ColorPicker from '../color-picker'
import Button from '../button'

import { arrayColors } from '../../theme/colors'
import styles from './styles'

const notificationOptions = [
  {
    key: 1,
    label: '10 mins before',
    value: 10,
  },
  {
    key: 2,
    label: '30 mins before',
    value: 30,
  },
  {
    key: 3,
    label: '1 hour before',
    value: 30,
  },
  {
    key: 4,
    label: '1 hour before',
    value: 60,
  },
  {
    key: 5,
    label: '1 day before',
    value: 60 * 24,
  },
]

function NewTaskForm() {
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.container}>
          <View style={styles.headContainer}>
            <Text style={styles.headText}>Create New Tasks</Text>
            <View style={styles.headLine} />
          </View>
          <View>
            <View style={styles.inputContainer}>
              <InputText label="Topic" placeholder="Write Topic" />
            </View>
            <View style={styles.inputContainer}>
              <InputText label="Description" placeholder="Write Description" multiline />
            </View>
            <View style={styles.inputsDate}>
              <View style={styles.inputDate}>
                <InputText label="Date" placeholder="Select Date" />
              </View>
              <View style={styles.inputDate}>
                <InputText label="Time" placeholder="Select Time" />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Picker
                label="Notification"
                placeholder="Select Notification"
                options={notificationOptions}
              />
            </View>
            <View style={styles.inputContainer}>
              <ColorPicker label="Choose color" colors={arrayColors} />
            </View>
          </View>
        </View>
        <View>
          <Button text="ADD" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default NewTaskForm