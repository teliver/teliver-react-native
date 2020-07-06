# Teliver
Teliver, a live tracking in android is your one place stop for all GPS Based Location tracking solutions. With simplified integrations for iOS and Android, Teliver synchronizes with applications that require location tracking. Advanced options with the inclusion of Custom markers, Multiple Operator Tracking and Push notifications to enhance user satisfaction and business productivity are
accomplished.
Live tracking in android especially live locality shares are now taken a step forward with Teliver. Real time activity stream for On-Demand applications are built on certain crucial qualities:
Accuracy: the base quality being accuracy, Teliver strives in delivering the best ofresults. Multi Business Solutions: Real-Time solutions for business requiring it is delivered with precision. Advanced Customization: With micro managerial possibilities, the opportunity to customize is practically infinite. Create your Teliver (live tracking in android) account today: https://app.teliver.io.
# Configuration
To begin with – The configuration steps
1. npm install teliver --save.
2. Obtain the map key from Google maps [page](https://developers.google.com/maps/documentation/android-api/).
3. Open your AndroidManifest.xml file inside your android folder of your project and paste the following code under application tag after embedding your map key obtained from Google.
```markdown
<meta-data
android:name="com.google.android.geo.API_KEY"
android:value="API_KEY_FOR_MAP"/>
```
4. Open your android build.gradle file and set  minSdkVersion = 21
> Note: You can skip steps 2 and 3 if you have already got map key and added it in manifest or you just want the location updates alone.
#####
# Integration
##### Let’s see the magical spells now!!
* Initiate our SDK by adding the following code snippet
```javascript
import Teliver from 'teliver';

* Initialize the module before you start tracking (needs to be done only once)
Teliver.initSDK("TELIVER_KEY", (success, message) => {
    console.log({success, message})
});
```
> Note: Obtain the Teliver key from the dashboard https://app.teliver.io

* Next, setup the transmission  for the operator app for whom the location has to be tracked.
```javascript
Teliver.startTracking("trackingID");
```
> Note: The Tracking\_Id here is your unique identifier for the trip; basically it’s just the order id or driver id in your system
* Since our operator app is ready for transmission, we will now setup our consumer side to locate on map.
```javascript
Teliver.startMultiTracking("trackingID-1,trackingID-2");
```
> Call this method with the tracking id to stop the tracking.
---
* ###### Stop Single Tracking
```javascript
Teliver.stopTracking("trackingID");
```
* ###### Stop Multi Tracking
```javascript
Teliver.stopMultiTracking("trackingID-1,trackingID-2");
```
> Note: Complete documentation can be found at https://docs.teliver.io/