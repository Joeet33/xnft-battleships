import React from "react";
import ReactXnft, { Tab, Text } from "react-xnft";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { THEME } from "./utils/theme";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return (
    <Tab.Navigator
      options={({ route }) => {
        return {
          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case "page1":
                return (
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      textAlign: "left",
                      color: THEME.colors.textSecondary,
                    }}
                  >
                    Page 1
                  </Text>
                );
              case "page2":
                return (
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      textAlign: "left",
                      color: THEME.colors.textSecondary,
                    }}
                  >
                    Page 2
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
        name="page1"
        disableLabel={true}
        component={() => <Page1 />}
      />
      <Tab.Screen
        name="page2"
        disableLabel={true}
        component={() => <Page2 />}
      />
    </Tab.Navigator>
  );
}
