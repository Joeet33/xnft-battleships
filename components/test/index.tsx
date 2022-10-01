import React from "react";
import { Button, useNavigation, View } from "react-xnft";

export const Test = () => {
  const nav = useNavigation();

  const clickGod = (god: any) => {
    nav.push("detail", { god });
  };

  return (
    <View>
      <Button onClick={clickGod}>test1</Button>
    </View>
  );
};
