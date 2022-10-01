import React from "react";
import ReactXnft, { Button, Stack, Tab, Text, useNavigation, View } from "react-xnft";
import { TabTest } from "../components/tabTest";
import { TabTest2 } from "../components/tabTest2";
import { Test } from "../components/test";
import { THEME } from "../utils/theme";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return (
    <>
    {/* <Stack.Navigator
      initialRoute={{ name: "grid" }}
      options={({ route }) => {
        switch (route.name) {
          case "grid":
            return {
              title: "test1",
            };
          case "detail":
            return {
              title: "test2",
            };
          default:
            throw new Error("unknown route");
        }
      }}
      style={{}}
    >
      <Stack.Screen name={"grid"} component={(props: any) => <Test />} />
      <Stack.Screen
        name={"detail"}
        component={(props: any) => (
          <View>
            <Button>test2</Button>
          </View>
        )}
      />
    </Stack.Navigator> */}




    <Tab.Navigator
          options={({ route }) => {
            return {
              tabBarIcon: ({ focused }) => {
                switch (route.name) {
                  case "attributes":
                    return (
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: 500,
                          textAlign: "left",
                          color: THEME.colors.textSecondary,
                        }}
                      >
                        Attributes
                      </Text>
                    );
                  case "details":
                    return (
                      <Text
                        style={{
                          fontSize: "16px",
                          fontWeight: 500,
                          textAlign: "left",
                          color: THEME.colors.textSecondary,
                        }}
                      >
                        Details
                      </Text>
                    );
                  default:
                    throw new Error("unknown route");
                }
              },
              tabBarActiveTintColor: THEME.colors.text,
              tabBarInactiveTintColor: THEME.colors.attributeBackground,
            };
          }}
          style={{
            height: "34px",
            background: "transparent",
            borderTop: "none",
          }}
          disableScroll
          
        >
          <Tab.Screen
            name="attributes"
            disableLabel={true}
            component={() => <TabTest />}
          />
          <Tab.Screen
            name="details"
            disableLabel={true}
            component={() => <TabTest2 />}
          />
        </Tab.Navigator>



    </>
  );
}
