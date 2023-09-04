// import React, { useState } from 'react';
// import { Drawer } from 'expo-router/drawer';

// const Layout = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Drawer
//       open={isOpen}
//       onClose={() => setIsOpen(false)}
//     >
//       <List>
//         <ListItem onPress={() => setIsOpen(false)}>
//           Home
//         </ListItem>
//         <ListItem onPress={() => setIsOpen(false)}>
//           About
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Layout;

import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './Feed';
import React, { useState } from 'react';
import { View, Button } from 'react-native';

const Drawer = createDrawerNavigator();

const Layout = () => {
  return (
    // <Drawer.Navigator>
    //   <Drawer.Screen name="Feed" component={Feed} />
    // </Drawer.Navigator>
    <Drawer.Navigator
        drawerContent={() => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
              title="Feed"
              onPress={() => {
                setSelectedScreen('Feed');
              }}
            />
          </View>
        )}
      >
        <Drawer.Screen name="Feed" component={Feed} />
      </Drawer.Navigator>
  );
}

export default Layout