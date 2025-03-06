Instructions to get a release file:
   1) Run this git clone command - git clone https://github.com/SurajSt7/plurit.git
   2) do npm install after successfully running the above command.
   3) if npm install doesn't work then force it using npm i --force command.
   4) after successfully installing node_modules hit the command cd android && ./gradlew assembleRelease
   5) Pardon me for not able to make an iOS build since i dont have iOS developer teams account.
   6) after successfully running this command - ./gradlew assembleRelease you'll get the app in androic folder
   7) go to project folder android/app/build/outputs/apk/debug/app-debug.apk
   8) fetch this app-debug.apk and install it in your android phone.
   9) after successfully installing the app in your android phone enter any valid or invalid phone number consisting 10 digits
   10) or you can enter any email also then enter 1234 in OTP input box.
   11) after entering a valid email or phone number and 1234 OTP you'll enter home screen.
   12) in home screen you'll see the location loading, defaulted the city name to City as a fallback string if city name doesn’t load properly.
   13) at least you'll see the name of that place or location based on that longitude and latitude

    
