import { TextInput, Button } from 'react-native';

function Login() {
  return (
    <view>
      <TextInput placeholder="Full Names" />
      <TextInput placeholder="Email Address" />
      <Button
        onPress={onPressLearnMore}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </view>
  );
}
export default Login;
