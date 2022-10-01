import React from "react";
import { Stack } from "react-xnft";
import { Info } from "../../components/info";
import { MoreInfo } from "../../components/moreInfo";

export const Page1 = () => {
  return (
    <Stack.Navigator
      initialRoute={{ name: "info" }}
      options={({ route }) => {
        switch (route.name) {
          case "info":
            return {
              title: "Info",
            };
          case "moreInfo":
            return {
              title: "More Info",
            };
          default:
            throw new Error("unknown route");
        }
      }}
      style={{}}
    >
      <Stack.Screen name={"info"} component={() => <Info />} />
      <Stack.Screen name={"moreInfo"} component={() => <MoreInfo />} />
    </Stack.Navigator>
  );
};
