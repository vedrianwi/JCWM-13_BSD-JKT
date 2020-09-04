// import Module
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

// INTERMEDIETE COMPONENT
const App = () => {
  // define state
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  //   const handleUsername = (value) => {
  //     console.log(value);
  //   };

  const handleSubmit = () => {
    const data = {username, email, phone, password};
    console.log('data : ', data);

    // reset state
    setUsername('');
    setEmail('');
    setPhone('');
    setPassword('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <Text style={styles.title}>Registrasion</Text>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setUsername(value)}
          value={username}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
        <Text>Phone</Text>
        <TextInput
          style={styles.input}
          textContentType="telephoneNumber"
          onChangeText={(value) => setPhone(value)}
          value={phone}
          keyboardType="phone-pad"
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          textContentType="password"
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
        {/* <Button title="Submit" onPress={handleSubmit} /> */}
        <CustomButton title="Submit" onPress={handleSubmit} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.cbutton}>
        <Text style={styles.ctitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    padding: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  cbutton: {
    backgroundColor: '#00cec9',
    padding: 10,
    borderRadius: 50,
    marginVertical: 15,
  },
  ctitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 18,
  },
});

export default App;
