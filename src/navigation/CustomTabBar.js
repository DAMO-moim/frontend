import { View, TouchableOpacity, Text } from "react-native";
import { BLACK_COLOR, NAV_BAR_COLOR } from "../constants/colors";

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: NAV_BAR_COLOR, height: 60 }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ color: isFocused ? BLACK_COLOR : 'gray' }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  

  