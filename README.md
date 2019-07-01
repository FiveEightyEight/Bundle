![Bundle The Trip Readiness](https://lh3.googleusercontent.com/1KVsbCJ0Z6z7bUxsN6YgSwKtxI5adDgww0q2nP2Lf2i2Jc3Bzcz6mZ8Brpnf0x9yaH9eUPzX2vBD4CjNyZywyFeAssyvyahFW-elfycirHGFxAYVrWNbJAhrcqS9LYiglxg7c4kYJw=w1135-h709-no "Bundle Logo")
# [**Bundle**](http://bundle.tips)
### _A **mobile-first**, trip-readiness app_

 Bundle relieves packing worries by showing travel goers what to pack from one place. Given the destination and duration of a trip, Bundle will create a customizable packing list. Once items are confirmed for a trip, travel goers can start tracking their packing progress. Bundle also has handy features like creating last-minute todo lists and storing booking information so that travel goers never have to feel like they’ve forgotten something important.


| | Table of Contents 🗂|
|:-:|:--:|
|1|**[Getting Started](#getting-started)**|
|2|**[Prerequisites](#prerequisites)**|
|3|**[Usage and Installation](#usage-and-installation)**|
|4|**[Built With](#built-with-)**|
|5|**[Contributing](#contributing-)**|
|6|**[Authors](#authors-)**|
|7|**[Acknowledgments](#acknowledgments--)**|


### **Getting Started** 📄
___
#### Prerequisites
1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

2. [Bundle Back-End API](https://github.com/aionate0812/bundle_backend) 

*  _**Minimum requirement**_**:**
    - `git clone https://github.com/aionate0812/bundle_backend`
    - **MapQuest API Key**: `https://developer.mapquest.com/documentation/` 
    - **DarkSky API Key**: `https://darksky.net/dev`
    - **Postgres Database**: `https://postgresapp.com/` _we recommend Postgres.app_
    - **Firebase Authentication Config**: 
      * *Docs*: `https://firebase.google.com/docs/auth?authuser=0` 
      * *Console*: `https://console.firebase.google.com/project/_/authentication/users`

#### Usage and Installation
3. In /src rename * **`firebaseConfigExample`** to * **`firebaseConfig`** and replace the Firebase Configurations with your own.

```javascript
export default {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
```

4. In /src rename * **`configExample.json`** to * **`config.json`** and replace the API configurations with your own.

```javascript
// Map Quest API used to parse city name into longitude and latitude coordinates
// Dark Sky API to get the weather 
{
    "MQ_API_KEY":"",
    "DARKSKY_API_KEY":""
}
```

5. `npm install`

6. `npm start`

### **Deployment** ⛓
---
1. **We recommend Firebase:** Docs: `https://firebase.google.com/docs/hosting?authuser=0`


### **Built With** 🛠
___
|Libraries||||
|:--|:---:|:---:|---:| 
|**axios**|[GitHub](https://github.com/axios/axios)| [npm](https://www.npmjs.com/package/axios)| |
|**bootstrap**|[GitHub](https://github.com/twbs/bootstrap) | [npm](https://www.npmjs.com/package/bootstrap) | [Web](https://getbootstrap.com/)|
|**firebase**|[GitHub](https://github.com/firebase/)|[npm](https://www.npmjs.com/package/firebase)|[Web](https://firebase.google.com/)|
|**i18n-iso-countries**| [Github](https://github.com/michaelwittig/node-i18n-iso-countries) | [npm](https://www.npmjs.com/package/i18n-iso-countries)| |
| **libphonenumber-js**|[Github](https://github.com/catamphetamine/libphonenumber-js) | [npm](https://www.npmjs.com/package/libphonenumber-js) | [Web](https://catamphetamine.github.io/libphonenumber-js/)|
| **moment**| [GitHub](https://github.com/moment/moment) | [npm](https://www.npmjs.com/package/moment) | [Web](https://momentjs.com/) |
|**react**| [Github](https://github.com/facebook/react) | [npm](https://www.npmjs.com/package/react) | [Web](https://reactjs.org/)|
|**react-burger-menu**| [Github](https://github.com/negomi/react-burger-menu) | [npm](https://www.npmjs.com/package/react-burger-menu) | [Web](http://negomi.github.io/react-burger-menu/)|
|**react-circular-progressbar**| [Github](https://github.com/kevinsqi/react-circular-progressbar) | [npm](https://www.npmjs.com/package/react-circular-progressbar) | [Web](https://www.kevinqi.com/react-circular-progressbar/)|
|**react-dates**| [Github](https://github.com/airbnb/react-dates) | [npm](https://www.npmjs.com/package/react-dates) | [Web](http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default)|
|**react-router-dom**| [Github](https://github.com/ReactTraining/react-router) | [npm](https://www.npmjs.com/package/react-router-dom) | [Web](https://reacttraining.com/react-router/web/guides/quick-start)|
|**react-toastify**| [Github](https://github.com/fkhadra/react-toastify) | [npm](https://www.npmjs.com/package/react-toastify) | [Web](https://fkhadra.github.io/react-toastify/)|
|**react-with-direction**| [Github](https://github.com/airbnb/react-with-direction) | [npm](https://www.npmjs.com/package/react-with-direction) | |


### **Contributing** 👁
___
1. Clone or Fork repo
2. Switch to `developmentMaster` branch
3. Fork a branch for each new feature you'd like to add
4. Before pushing changes, switch to `developmentMaster` then `git pull` for latest updates.
    - Switch to your branch
    - Merge `developmentMaster` into your branch
    - Resolve any conflicts
5. Push your branch
6. Create Pull Request against `developmentMaster`

### **Authors** 📚
---
| | | |
|:---| :---: | :---:| 
|🧙**Pam** | [GitHub](https://github.com/pamelaabreu) | [LinkedIn](https://www.linkedin.com/in/pamela-abreu/) |
|👩‍🚀**Rupa**| [GitHub](https://github.com/Rupa1216) | [LinkedIn](https://www.linkedin.com/in/sdatta87/)|
|👨‍🎤**Alex**| [GitHub](https://github.com/aionate0812) | [LinkedIn](https://www.linkedin.com/in/alexander-onate/)| 
|👨‍🚀**Robert**| [GitHub](https://github.com/FiveEightyEight) | [LinkedIn](https://www.linkedin.com/in/robert-abreu/)

### **Acknowledgments**  🤜🤛
---
 Special thanks to our tech mentor Josh & our instructors Mo & Taq.
* **Josh Goldberg**: [GitHub](https://github.com/JoshuaKGoldberg) 🐐
* **Mo Mosayed**: [GitHub](https://github.com/mmosayed)
* **Taq Karim**: [GitHub](https://github.com/mottaquikarim)