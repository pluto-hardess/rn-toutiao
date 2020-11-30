import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Colors from '../../constant/color'

type Props = {
  name: string;
  focused: boolean;
};

export default (props: Props) => {
  const { name, focused } = props;
  return (
    <Ionicons
      name={name}
      size={32}
      color={focused ? Colors.selectedIconColor : Colors.defaultIconColor}
      style={{ marginBottom: -3 }}
    />
  );
};
