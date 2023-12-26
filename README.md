# Weathe App
Weather App that allows users to search for a city, after clicking on city it will lead to another screen that will show the current tempreture, icon etc of that city. 
Used 2 Api websites http://gd.geobytes.com/AutoCompleteCity?q=Zoc&callback=? for cities and https://openweathermap.org/current for current tempreture using an API key. 
3 js files in the component folder.
1. SearchComponent: includes the api for searching the city, searchbar and flatlist. User clicks the city and navigates to WeatherForCity
2. WeatherForCity: includes the api for the current weather reciving the city name from SearchComponet using NavigationContainer and createNativeStackNavigator. The Api will return components for WeatherScreen using props to pass it.
3. WeatherScreen: includes the view of the WeatherScreen displaying the current tempreture, time, date, feel like and weather icon


![Screenshot 2023-12-25 224520](https://github.com/faalim/WeatherApp/assets/109769086/a7b14416-a305-4dcd-8512-1caf91363a0e)

![Screenshot 2023-12-25 224250](https://github.com/faalim/WeatherApp/assets/109769086/13be3cda-aa47-4c41-a5f6-f5a7614a4e96)
