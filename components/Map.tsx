import { calculateRegion } from "@/lib/map";
import { useDriverStore, useLocationStore } from "@/store";
import { Text } from "react-native"
import MapView, { PROVIDER_DEFAULT } from "react-native-maps"
const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore(); 
  const { selectedDriver, setDrivers } = useDriverStore();
  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      tintColor="black"
      mapType="mutedStandard"
    //  initialRegion={}
      showsPointsOfInterest={false}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
        <Text>
              Map
        </Text>
    </MapView>
  )
}

export default Map