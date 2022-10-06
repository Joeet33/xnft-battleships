import React from "react";
import { Button, useNavigation, View } from "react-xnft";

export const Info = () => {
  const nav = useNavigation();

  const onClickHandler = () => {
    nav.push("moreInfo");
  };

  return (
    <View>
      <Button onClick={onClickHandler}>Info</Button>
    </View>
  );
};
